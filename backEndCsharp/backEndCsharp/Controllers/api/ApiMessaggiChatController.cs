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
  public class ApiMessaggiChatController : ControllerBase
  {
    private readonly DbAngularLibroContext _context;

    public ApiMessaggiChatController(DbAngularLibroContext context)
    {
      _context = context;
    }

    // GET: api/ApiMessaggiChat
    [HttpGet]
    public async Task<ActionResult<Dictionary<string,List<MessaggiChat>>>> GetMessaggiChat()
    {
      var listaChat = await _context.MessaggiChat.ToListAsync();
      return new Dictionary<string, List<MessaggiChat>>()
      {
        { "data" , listaChat }
      };
    }

    // GET: api/ApiMessaggiChat/5
    [HttpGet("{id}")]
    public async Task<ActionResult<MessaggiChat>> GetMessaggiChat(int id)
    {
      var messaggiChat = await _context.MessaggiChat.FindAsync(id);

      if (messaggiChat == null)
      {
        return NotFound();
      }

      return messaggiChat;
    }

    // PUT: api/ApiMessaggiChat/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutMessaggiChat(int id, MessaggiChat messaggiChat)
    {
      if (id != messaggiChat.Id)
      {
        return BadRequest();
      }

      _context.Entry(messaggiChat).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!MessaggiChatExists(id))
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

    // POST: api/ApiMessaggiChat
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<MessaggiChat>> PostMessaggiChat(MessaggiChat messaggiChat)
    {
      _context.MessaggiChat.Add(messaggiChat);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetMessaggiChat", new { id = messaggiChat.Id }, messaggiChat);
    }

    // DELETE: api/ApiMessaggiChat/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMessaggiChat(int id)
    {
      var messaggiChat = await _context.MessaggiChat.FindAsync(id);
      if (messaggiChat == null)
      {
        return NotFound();
      }

      _context.MessaggiChat.Remove(messaggiChat);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool MessaggiChatExists(int id)
    {
      return _context.MessaggiChat.Any(e => e.Id == id);
    }
  }
}
