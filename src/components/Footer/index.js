
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../../constants';

const Footer = () => {
    return (
        <footer className='flex border-t-2'>
            <nav className=''>
                <ul className='ml-20 '>
                    <strong className='block'>Social</strong>
                    {
                        Object.entries(SOCIAL_LINKS).map(([platform, link], index, links) => {
                            return (
                                <span key={platform}>
                                    <li className='inline pr-2'>
                                        <Link to={link} target='_blank'>{platform.split('_').join(' ').toUpperCase()}</Link>
                                    </li>
                                    {links.length > index + 1 && <span className='pr-2'>/</span>}
                                </span>
                            )
                        })
                    }
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;