using CRUDRepository.DirectorRepository;
using CRUDRepository.MoviesRepository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Agregar los servicios al contenedor.
builder.Services.AddControllers();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "PruebaTecnica", Version = "v1" });
});

var conn = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddScoped<IDirector, DirectorRepository>();
builder.Services.AddScoped<IMovies, MoviesRepository>();
builder.Services.AddCors(options => options.AddPolicy(name: "pruebaTecnica",
    policy =>
    {
        policy.WithOrigins("http://localhost:58737").AllowAnyMethod().AllowAnyHeader();
    }
    ));

var app = builder.Build();

// Configurar la canalización de solicitudes HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "PruebaTecnica API V1");
    });
}

app.UseCors("pruebaTecnica");

app.UseRouting();


app.UseAuthorization();

app.MapControllers();

app.Run();