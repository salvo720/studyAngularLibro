using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace backEndCsharp.Models;

public partial class Utente
{
  public int Id { get; set; }

  public string Nome { get; set; } = null!;

  public string Cognome { get; set; } = null!;

  public string Email { get; set; } = null!;

  public string Ip { get; set; } = null!;

  public string AmicoId { get; set; } = null!;

  public string Citta { get; set; } = null!;
  //attributo non mappato nel db  
  [NotMapped]
  public List<Utente>? Amici { get; set; } = null;

  public Utente( Utente utente, List<Utente> amici)
  {
    this.Id = utente.Id;
    this.Nome = utente.Nome;
    this.Cognome = utente.Cognome;
    this.Email = utente.Email;
    this.Ip = utente.Ip;
    this.AmicoId = utente.AmicoId;
    this.Citta = utente.Citta;
    this.Amici = amici;
  }
  protected Utente()
  {
  }
}

// //classe non mappata nel db  
//[NotMapped]
//public partial class UtentePower : Utente
//{
//  public string cia { get; set; } = null!;
//  public List<Utente> Amici { get; set; } = null!;

//  public UtentePower(Utente utente, List<Utente> amici) : base()
//  {
//    this.Amici = amici;
//    this.cia = "asd";
//  }
//  protected UtentePower()
//  {
//  }
//}
