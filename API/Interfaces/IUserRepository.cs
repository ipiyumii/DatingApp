using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces;

public interface IUserRepository
{
     void Update(AppUser user);
    Task<bool> SaveAllAsync();
    Task<IEnumerable<AppUser>> GetUsersAsync();
    Task<AppUser?> GetUserByIdAsync(int id);
    Task<AppUser?> GetuserByUsernameAsync(string username);
    Task<PageList<MemberDto>> GetMemberAsync(UserParams userParams);
    Task<MemberDto?> GetMemberAsync(string username);
    
}