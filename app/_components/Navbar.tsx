'use client';

import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBell,
    faMagnifyingGlass,
    faPen,
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const isAuthenticated = false;

    const authenticatedNavItems = (
        <>
            <button className="btn btn-circle btn-ghost">
                <div className="indicator">
                    <FontAwesomeIcon icon={faBell} fixedWidth />
                    <span className="badge indicator-item badge-primary badge-xs"></span>
                </div>
            </button>
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className="avatar placeholder btn btn-circle btn-ghost"
                >
                    <div className="w-12 rounded-full bg-neutral text-neutral-content">
                        <span>DZ</span>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                >
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <a>Posts</a>
                    </li>
                    <li>
                        <a>Prompts</a>
                    </li>
                    <li>
                        <a>Corrections</a>
                    </li>
                    <li>
                        <a>Settings</a>
                    </li>
                    <li>
                        <a>Logout</a>
                    </li>
                </ul>
            </div>
        </>
    );

    const unauthenticatedNavItems = (
        <Link href="/login" className="btn btn-ghost text-primary">
            Sign In
        </Link>
    );

    return (
        <div className="shadow-md">
            <div className="container navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <FontAwesomeIcon icon={faBars} fixedWidth />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Prompts</a>
                            </li>
                            <li>
                                <a>Community</a>
                                <ul className="p-2">
                                    <li>
                                        <a className="justify-between">
                                            Discord
                                            <div className="badge badge-accent badge-sm">
                                                New
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Rankings</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Prompts</a>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Community
                                    <div className="badge badge-accent badge-sm">
                                        New
                                    </div>
                                </summary>
                                <ul className="p-2">
                                    <li>
                                        <a className="justify-between">
                                            Discord
                                            <div className="badge badge-accent badge-sm">
                                                New
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Rankings</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button className="btn btn-circle btn-ghost">
                        <FontAwesomeIcon icon={faMagnifyingGlass} fixedWidth />
                    </button>
                    <button className="btn btn-circle btn-ghost">
                        <FontAwesomeIcon icon={faPen} fixedWidth />
                    </button>
                    {isAuthenticated
                        ? authenticatedNavItems
                        : unauthenticatedNavItems}
                </div>
            </div>
        </div>
    );
}
