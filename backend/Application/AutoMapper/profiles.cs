using AutoMapper;

using backend.Models;
using backend.Application.ViewModels;

namespace backend.Application.AutoMapper;

public class Profiles : Profile
{
    public Profiles()
    {
        CreateMap<CustomerViewModel, Customer>();
        CreateMap<Customer, CustomerViewModel>();
    }
}