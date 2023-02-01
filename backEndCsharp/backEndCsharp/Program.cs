using backEndCsharp.DbContex;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// connection db 
builder.Services.AddDbContext<DbAngularLibroContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("dbAngularLibro")));

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  app.UseExceptionHandler("/Home/Error");
  // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
  app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();





// connectiond db nativa
/*
string server = "localhost";
string database = "dbAngularLibro";
string username = "salvo";
string password = "";
string connstring = "SERVER="+server+ ";" + "DATABASE=" + database + ";" + "UID=" + username + ";" + "PASSWORD=" + password + ";" ;
MySqlConnection conn = new MySqlConnection(connstring);
conn.Open();
string query = "select * from treno ";
MySqlCommand cmd = new MySqlCommand(query, conn);
MySqlDataReader reader = cmd.ExecuteReader();
while (reader.Read())
{
  Console.WriteLine("reader : " + reader);
  Console.WriteLine(reader["linea"]);
  Console.WriteLine(reader["direzione"]);
  Console.WriteLine(reader["numChatting"]);
  Console.WriteLine(reader["tempo"]);
  Console.WriteLine(reader["stazione"]);
  Console.WriteLine(reader["carrozza"]);
}
*/

