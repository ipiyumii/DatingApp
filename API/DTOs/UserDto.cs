
using AutoMapper.Configuration.Conventions;

namespace API.DTOs;

public class UserDto
{
    public required string Username { get; set; }    
    public required string KnownAs { get; set; }
    public required string token { get; set; }
    public required string Gender { get; set; }
    public string? photoUrl { get; set; }
}