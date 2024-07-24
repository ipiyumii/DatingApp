using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController(DataContext context) : BaseApiController
    {
        // [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetAuth() {
            return "secret text";
        }

        // [Authorize]
        [HttpGet("not-found")] //something like app user doesnt exists.so should return a AppUser
        public ActionResult<AppUser> GetNotFound() {
            var thing = context.Users.Find(-1);
            if(thing == null) return NotFound();
            return thing;
        }

        // [Authorize]
        [HttpGet("server-error")]
        public ActionResult<AppUser> GetServerError() {
            var thing = context.Users.Find(-1) ?? throw new Exception("something bad has happend");
            return thing;
        }

        // [Authorize]
        [HttpGet("bad-request")] //user related errors 400 - 499
        public ActionResult<string> GetBadRequest() {
            return BadRequest("this was not a good request");
        }
    }
}