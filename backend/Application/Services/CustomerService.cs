
using FluentValidation;
using AutoMapper;
using backend.Application.ViewModels;
using backend.Infra.Repositories;
using backend.Models;

namespace backend.Application.Services;

public class CustomerService
{

    private readonly IValidator<CustomerViewModel> _customerViewModelValidator;
    private readonly CustomerRepository _customerRepository;
    private readonly IMapper _mapper;
    public CustomerService(IValidator<CustomerViewModel> customerViewModelValidator, CustomerRepository customerRepository, IMapper mapper)
    {
        _customerViewModelValidator = customerViewModelValidator;
        _customerRepository = customerRepository;
        _mapper = mapper;
    }

    public async Task<bool> CreateCustomer(CustomerViewModel request)
    {
        await _customerViewModelValidator.ValidateAndThrowAsync(request);
        Customer customer = _mapper.Map<Customer>(request);
        await _customerRepository.Add(customer);
        return true;
    }

    public IEnumerable<CustomerViewModel> ListAll()
    {
        var customers = _customerRepository.List();
        return _mapper.Map<IEnumerable<CustomerViewModel>>(customers);
    }
}