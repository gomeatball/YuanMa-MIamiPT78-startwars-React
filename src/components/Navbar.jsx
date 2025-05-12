import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
				    <div className="starWars_logo">
						<img src="" alt="" />Logo
					</div>
					
				</Link>
				<div className="ml-auto">
					
						<div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><h6>CharacterName</h6></li>
  
  </ul>
</div>
					
				</div>
			</div>
		</nav>
	);
};