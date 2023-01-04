using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace backEndCsharp.Models;

[Table("Treno")]
public partial class Treno
{
    [Key]
    public int Id { get; set; }

    [Column("linea")]
    [StringLength(255)]
    public string Linea { get; set; } = null!;

    [Column("direzione")]
    [StringLength(255)]
    public string Direzione { get; set; } = null!;

    [Column("numChatting")]
    public int NumChatting { get; set; }

    [Column("tempo")]
    public int Tempo { get; set; }

    [Column("stazione")]
    [StringLength(255)]
    public string Stazione { get; set; } = null!;

    [Column("carrozza")]
    [StringLength(255)]
    public string Carrozza { get; set; } = null!;
}
