using backEndCsharp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace backEndCsharp.Controllers
{

  public class FirstController : Controller
  {
    //public List<Treno> ListaTreno { get; set; }
    private readonly IConfiguration configuration;


    public FirstController(IConfiguration config)
    {
      this.configuration = config;
    }
    // GET: FirstController
    public ActionResult Index()
    {

      try
      {
        string connectionstring = configuration.GetConnectionString("DefaultConnectionString");

        SqlConnection conn = new SqlConnection(connectionstring);
        conn.Open();
        string query = "select * from treno ";
        SqlCommand cmd = new SqlCommand(query, conn);
        SqlDataReader reader = cmd.ExecuteReader();


        while (reader.Read())
        {
          //Treno treno = new Treno();
          //treno.Id = reader.GetInt32(0);
          //treno.Linea = reader.GetString(1);
          //treno.Direzione = reader.GetString(2);
          //treno.Tempo = reader.GetInt32(3);
          //treno.Stazione = reader.GetString(4);
          //treno.Carrozza = reader.GetString(5);
          //ListaTreno.Add(treno);

        }

        //ViewData["ListaTreno"] = ListaTreno;

        conn.Close();
      }
      catch(Exception e)
      {
        Console.WriteLine("Exception :" + e.ToString());

      }
     
      return View();
    }

    // GET: FirstController/Details/5
    public ActionResult Details(int id)
    {
      return View();
    }

    // GET: FirstController/Create
    public ActionResult Create()
    {
      return View();
    }

    // POST: FirstController/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create(IFormCollection collection)
    {
      try
      {
        return RedirectToAction(nameof(Index));
      }
      catch
      {
        return View();
      }
    }

    // GET: FirstController/Edit/5
    public ActionResult Edit(int id)
    {
      return View();
    }

    // POST: FirstController/Edit/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Edit(int id, IFormCollection collection)
    {
      try
      {
        return RedirectToAction(nameof(Index));
      }
      catch
      {
        return View();
      }
    }

    // GET: FirstController/Delete/5
    public ActionResult Delete(int id)
    {
      return View();
    }

    // POST: FirstController/Delete/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Delete(int id, IFormCollection collection)
    {
      try
      {
        return RedirectToAction(nameof(Index));
      }
      catch
      {
        return View();
      }
    }
  }
}
