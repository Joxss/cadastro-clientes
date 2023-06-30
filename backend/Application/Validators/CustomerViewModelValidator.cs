
using FluentValidation;
using backend.Application.ViewModels;
using backend.Infra.Repositories;

namespace backend.Application.Validators;

public class CustomerViewModelValidator : AbstractValidator<CustomerViewModel>
{
    private readonly CustomerRepository _customerRepository;
    public CustomerViewModelValidator(CustomerRepository customerRepository)
    {
        _customerRepository = customerRepository;

        RuleFor(x => x.Name)
            .NotEmpty();

        RuleFor(x => x.Cpf)
            .NotNull()
            .Must(cpf => !(_customerRepository.List().Any(customer => customer.Cpf == cpf)))
            .WithMessage("CPF já cadastrado!");

        RuleFor(x => x.Email)
            .EmailAddress()
            .NotNull();
    }
}