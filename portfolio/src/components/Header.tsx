import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nes.css/css/nes.min.css';

function Menu() {
  return (
    <div>
    <header className='header_container'>
    <Stack direction="horizontal" gap={3}>
      <a target='blank' href='https://github.com/Eduvale007?tab=repositories' className="p-2"><i className="nes-octocat animate"></i></a>
      <a target='blank' href='https://www.linkedin.com/in/eduardoandrade007/' className="p-2 ms-auto"><i className="nes-icon linkedin is-medium"></i></a>
      <a target='blank' href='https://github.com/Eduvale007?tab=repositories'  className="p-2"><i className="nes-icon github is-medium"></i></a>
    </Stack>
    </header>
    </div>
  );
}

export default Menu;