using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly string connectionString =
            "Server=LAPTOP-GHQBCISV\\MSSQLSERVER01;Database=products;User Id=sa;Password=12345678;TrustServerCertificate=true;";

        // Registrar usuario
        [HttpPost("Register")]
        public IActionResult Register([FromBody] User user)
        {
            if (user == null)
                return BadRequest("Invalid user data");

            using (var connection = new SqlConnection(connectionString))
            {
                var sql = "INSERT INTO users (username, password) VALUES (@username, @password)";
                var rows = connection.Execute(sql, new { user.Username, user.Password });

                return rows > 0 ? Ok(new { message = "User registered" }) :
                                  StatusCode(500, "Error registering user");
            }
        }

        // Login (validación de usuario)
        [HttpPost("Login")]
        public IActionResult Login([FromBody] User user)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                var sql = "SELECT * FROM users WHERE username=@username AND password=@password";
                var foundUser = connection.QuerySingleOrDefault<User>(sql, new { user.Username, user.Password });

                if (foundUser == null)
                    return Unauthorized("Invalid credentials");

                return Ok(new { message = "Login successful" });
            }
        }
    }

    public class User
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
    }
}

