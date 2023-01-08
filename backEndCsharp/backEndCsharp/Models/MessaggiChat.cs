using System;
using System.Collections.Generic;

namespace backEndCsharp.Models;

public partial class MessaggiChat
{
  public int Id { get; set; }

  public string Idt { get; set; } = null!;

  public string Idu { get; set; } = null!;

  public string Idm { get; set; } = null!;

  public string? IdDestinatario { get; set; }

  public string Testo { get; set; } = null!;

  public int Stato { get; set; }
}
