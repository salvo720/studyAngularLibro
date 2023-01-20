using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backEndCsharp.DbContex;
using backEndCsharp.Models;
using DocumentFormat.OpenXml.Office2010.Excel;
using System.Collections;


namespace backEndCsharp.Controllers.api
{
  [Route("api/[controller]")]
  [ApiController]
  public class ApiUtenteController : ControllerBase
  {
    private readonly DbAngularLibroContext _context;

    public ApiUtenteController(DbAngularLibroContext context)
    {
      _context = context;
    }

    // GET: api/ApiUtente
    [HttpGet]
    public async Task<ActionResult<Dictionary<string, List<Utente>>>> GetUtente()
    {
      var utenti = await _context.Utente.ToListAsync();
      Dictionary<string, List<Utente>> DictionaryUtente = new Dictionary<string, List<Utente>>(){
            { "data" , utenti  }
          };

      return DictionaryUtente;
    }

    // GET: api/ApiUtente/5
    [HttpGet("{id}")]
    public async Task<Utente> GetUtente(int id)
    {
      List<Utente> ListAmico = new List<Utente>();

      var utente = await _context.Utente.FindAsync(id);
     

      if (utente == null)
      {
        //old code
        //return NotFound();
        return new Utente(null ,null );
      }

      string AmicoId = utente.AmicoId;
      string[] splitAmicoId = AmicoId.Split(',');

      foreach (var idAmico in splitAmicoId)
      {
        int idAmicoInt = Int32.Parse(idAmico);
        var Amico = await _context.Utente.FindAsync(idAmicoInt)!;
        ListAmico.Add(Amico);
      }
      Utente utentePower = new Utente(utente, ListAmico);

      //utentePower.Amici = ListAmico;

      //Console.WriteLine(" ListAmico : " + ListAmico);


      //Dictionary<string, List<Utente>> UtenteComplete = new Dictionary<string, List<Utente>>()
      //{
      //  {"data", utente }
      //};


      return utentePower;

    }

    // PUT: api/ApiUtente/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUtente(int id, Utente utente)
    {
      if (id != utente.Id)
      {
        return BadRequest();
      }

      _context.Entry(utente).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UtenteExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/ApiUtente
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Utente>> PostUtente(Utente utente)
    {
      _context.Utente.Add(utente);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetUtente", new { id = utente.Id }, utente);
    }

    // DELETE: api/ApiUtente/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUtente(int id)
    {
      var utente = await _context.Utente.FindAsync(id);
      if (utente == null)
      {
        return NotFound();
      }

      _context.Utente.Remove(utente);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool UtenteExists(int id)
    {
      return _context.Utente.Any(e => e.Id == id);
    }
  }
}
