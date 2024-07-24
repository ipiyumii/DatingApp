using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("Photos")]
public class Photo
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public bool IsMain { get; set; } //if this is the users main img
    public  string? PublicId { get; set; }

    //navigation property(this is a 1 to many relationship)
    public int AppUserId { get; set; }
    public AppUser AppUser { get; set; } = null!;
}