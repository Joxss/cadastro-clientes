using Microsoft.EntityFrameworkCore;
using FluentValidation;
using AutoMapper;

using backend.Application.Validators;
using backend.Application.ViewModels;
using backend.Application.Services;
using backend.Application.AutoMapper;
using backend.Infra.Repositories;
using backend.Infra;

var AllowFrontend = "_allowFrontend";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowFrontend,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000");
                      });
});

string path = Directory.GetCurrentDirectory();
string dbPath = System.IO.Path.Join(path, "customer.db");
builder.Services.AddDbContext<CustomerDbContext>(opt => opt.UseSqlite($"Data Source={dbPath}"));

builder.Services.AddControllers();

builder.Services.AddScoped<CustomerService>();
builder.Services.AddScoped<CustomerRepository>();
builder.Services.AddScoped<IValidator<CustomerViewModel>, CustomerViewModelValidator>();

var AutoMapperConfig = new AutoMapper.MapperConfiguration(cfg =>
{
    cfg.AddProfile<Profiles>();
});
IMapper mapper = AutoMapperConfig.CreateMapper();
builder.Services.AddSingleton(mapper);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(AllowFrontend);

app.UseAuthorization();

app.MapControllers();

app.Run();
