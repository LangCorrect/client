import {
    faDiscord,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
            <nav className="grid grid-flow-col gap-4">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/community-guidelines" className="link-hover link">
                    Community Guidelines
                </Link>
                <Link href="/terms" className="link-hover link">
                    Terms of Service
                </Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com/langcorrect" target="_blank">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            fixedWidth
                            size="xl"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/langcorrect/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            fixedWidth
                            size="xl"
                        />
                    </a>
                    <a href="https://discord.gg/SsJexjK" target="_blank">
                        <FontAwesomeIcon
                            icon={faDiscord}
                            fixedWidth
                            size="xl"
                        />
                    </a>
                </div>
            </nav>
            <aside>
                <p>© 2019-{currentYear} LangCorrect</p>
            </aside>
        </footer>
    );
}
