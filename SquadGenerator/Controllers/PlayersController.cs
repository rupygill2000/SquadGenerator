using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SquadGenerator.Controllers
{
    public class PlayersController : Controller
    {
        // GET: Players
        public ActionResult Index()
        {
            return View();
        }
    }
}