using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backEndCsharp.DbContex;
using backEndCsharp.Models;

namespace backEndCsharp.Controllers.api
{
  [Route("api/[controller]")]
  [ApiController]
  public class ApiTrenoController : ControllerBase
  {
    private readonly DbAngularLibroContext _context;

    public ApiTrenoController(DbAngularLibroContext context)
    {
      _context = context;
    }

    // GET: api/ApiTreno
    [HttpGet]
    [Produces("application/json")]
    public async Task<ActionResult<Dictionary<string, List<Treno>>>> GetTrenos()
    {
      var trenos = await _context.Trenos.ToListAsync();
      return new Dictionary<string, List<Treno>>
      {
          { "data", trenos }
      };
    }

    // GET: api/ApiTreno/5
    [HttpGet("{id}")]
    [Produces("application/json")]
    public async Task<ActionResult<Treno>> GetTreno(int id)
    {
      var treno = await _context.Trenos.FindAsync(id);

      if (treno == null)
      {
        return NotFound();
      }

      return treno;
    }

    // PUT: api/ApiTreno/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTreno(int id, Treno treno)
    {
      if (id != treno.Id)
      {
        return BadRequest();
      }

      _context.Entry(treno).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!TrenoExists(id))
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

    // POST: api/ApiTreno
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Treno>> PostTreno(Treno treno)
    {
      _context.Trenos.Add(treno);
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateException)
      {
        if (TrenoExists(treno.Id))
        {
          return Conflict();
        }
        else
        {
          throw;
        }
      }

      return CreatedAtAction("GetTreno", new { id = treno.Id }, treno);
    }

    // DELETE: api/ApiTreno/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTreno(int id)
    {
      var treno = await _context.Trenos.FindAsync(id);
      if (treno == null)
      {
        return NotFound();
      }

      _context.Trenos.Remove(treno);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool TrenoExists(int id)
    {
      return _context.Trenos.Any(e => e.Id == id);
    }
  }
}
