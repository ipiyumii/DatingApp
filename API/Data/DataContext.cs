﻿using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options) //derive from DbContext
    {
    }

    public DbSet<AppUser> Users { get; set; }

}
