using backEndCsharp.DbContex;
using backEndCsharp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backEndCsharp.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class LoginController : Controller
  {
    private readonly DbAngularLibroContext _context;

    //creazione istanza di contex per eseguire le query sul db 
    public LoginController(DbAngularLibroContext context)
    {
      _context = context;
    }
    public IActionResult Index()
    {
      return View();
    }

    [HttpGet("getSaluti")]
    public string getSaluti()
    {
      return "ciao sono un app c#";
    }

    [HttpGet("getSaluti/{Nome}")]
    public string getSaluti(string? Nome)
    {
      if(Nome == null)
      {
        return "non trovato ";
      }
      return string.Format("ciao {0} sono un app c#",Nome);
    }

    [HttpGet("testWhereCondiction")]
    public async Task<IActionResult> testWhereCondiction()
    {
      if(_context.MessaggiChat == null ) return View("index");
      return View(await _context.MessaggiChat.Where(messaggioChat => messaggioChat.Id == 1).ToListAsync());
    }

    [HttpPost("login")]
    public async Task<IActionResult> login(Utente utente)
    {
      var userList = await  _context.Utente.ToListAsync();
      string email = utente.Email;
      string password = utente.Email;

      Console.WriteLine("email " + email);
      Console.WriteLine("password " + password);



      return View();


    }


  }
}
