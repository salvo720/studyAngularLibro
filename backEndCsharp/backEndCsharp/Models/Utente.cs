using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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
  public string Password { get; set; } = null!;

  //attributo non mappato nel db  
  [NotMapped]
  public List<Utente>? Amici { get; set; } = null;

  public Utente(Utente utente, List<Utente> amici)
  {
    this.Id = utente.Id;
    this.Nome = utente.Nome;
    this.Cognome = utente.Cognome;
    this.Email = utente.Email;
    this.Ip = utente.Ip;
    this.AmicoId = utente.AmicoId;
    this.Citta = utente.Citta;
    this.Amici = amici;
    this.Password = utente.Password;
  }

  public Utente()
  {
  }

  [JsonConstructor]
  public Utente(string email , string password )
  {
    //attributi necessari not null 
    this.Citta = this.AmicoId = this.Ip = this.Cognome = this.Nome = "";
    this.Amici = null;

    Email = email;
    Password = password;
  }
}

// //classe non mappata nel db  
//[NotMapped]
