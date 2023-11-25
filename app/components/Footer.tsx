import { FaGithub, FaTwitter } from 'react-icons/fa' // Importing icons from React Icons

export const Footer = () => {
    return (
        <footer className="bg-offBlack-dark text-center py-4 text-sm sticky bottom-0">
            <p className="text-lumoGreen">Built with ❤️ by Ben Sparks</p>
            <div className="flex justify-center mt-2">
                <a
                    href="https://github.com/BenSparksCode"
                    className="mx-2 text-lumoGreen"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href="https://twitter.com/bensparks_"
                    className="mx-2 text-lumoGreen"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <FaTwitter size={20} />
                </a>
            </div>
        </footer>
    )
}
