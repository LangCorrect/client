import Link from 'next/link';
import Navbar from './_components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function Section({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-16">
            <div className="container">{children}</div>
        </section>
    );
}

function HeroSection() {
    return (
        <Section>
            <div className="hero">
                <div className="hero-content flex-col p-0 lg:flex-row-reverse">
                    <Image
                        src="/illustrations/classroom.webp"
                        alt="LangCorrect Classroom"
                        width={500}
                        height={500}
                        priority
                    />
                    <div>
                        <div className="prose">
                            <h1>Write. Learn. Grow.</h1>
                            <p>
                                Master grammar, spelling, and syntax in the
                                language(s) you&apos;re learning through direct
                                feedback on your writing from fluent, native
                                speakers.
                            </p>
                            <div className="flex gap-3">
                                <Link className="btn btn-primary" href="signup">
                                    Start learning
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                                <Link className="btn btn-ghost" href="journals">
                                    Browse as guest
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function CorrectionStepsSection() {
    return (
        <section className="bg-base-200 py-16">
            <div className="container">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="flex-1">
                        <div className="prose">
                            <h2>
                                Getting corrections on your writing is really
                                easy.
                            </h2>
                            <p>
                                Once you&apos;re done writing in your studying
                                language, we will automatically match it with
                                native speakers.
                            </p>
                        </div>
                    </div>
                    <div className="order-first mb-5 md:order-last md:mb-0">
                        <Image
                            src="/illustrations/explore.webp"
                            alt="LangCorrect Correction"
                            width={200}
                            height={200}
                            priority
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div className="prose">
                        <h3>Register an account</h3>
                        <p>
                            We start with a short 3-step registration process to
                            help us determine users you should be match with.
                        </p>
                    </div>
                    <div className="prose">
                        <h3>Write a journal entry</h3>
                        <p>
                            Browse a wide variety of writing prompts or simply
                            create a journal from scratch.
                        </p>
                    </div>
                    <div className="prose">
                        <h3>Review corrections</h3>
                        <p>
                            Receive corrections from native speakers and learn
                            from your mistakes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturesSection() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div className="prose">
                        <h3>Built for serious learners</h3>
                        <p>
                            Ditch all the unnecessary distractions on other
                            language-learning platforms and spend more time
                            focusing on your new language(s).
                        </p>
                    </div>
                    <div className="prose">
                        <h3>Straight to the point</h3>
                        <p>
                            Get corrections on your writing quickly – Simply
                            write a journal in your target language, publish it,
                            and let the LangCorrect community do their thing to
                            provide corrections for you.
                        </p>
                    </div>
                    <div className="prose">
                        <h3>Constantly improving</h3>
                        <p>
                            The LangCorrect platform is getting better all the
                            time. Consistent, direct feedback from our user base
                            and frequent updates allow us to keep things fresh
                            and interesting for our users.
                        </p>
                    </div>
                    <div className="prose">
                        <h3>Learn with friends</h3>
                        <p>
                            Invite your friends to join LangCorrect and
                            challenge one another to see who can earn the
                            highest Rankings and Streaks.
                        </p>
                    </div>
                    <div className="prose">
                        <h3>Functionality with learning in mind</h3>
                        <p>
                            From writing prompts to automatic, color-coded
                            correction highlighting, learning to write in
                            another language has never been this easy.
                        </p>
                    </div>
                    <div className="prose">
                        <h3>Built-in messaging</h3>
                        <p>
                            Take a break to relax and chat with other learners
                            using the messaging feature. This is a great way to
                            make new friends and meet people from around the
                            globe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="bg-base-200 py-16">
            <div className="container">
                <div className="grid grid-cols-1 items-center md:grid-cols-2">
                    <div className="prose">
                        <h3>
                            Join today and experience language-learning,
                            redefined.
                        </h3>
                        <p>
                            Whether you&apos;re fluent or just starting out,
                            we&apos;d be thrilled to have you join the
                            LangCorrect community. We&apos;re all learners and
                            we understand that in order to reach fluency and
                            confidence in a new language, it&apos;s important to
                            make mistakes. LangCorrect&apos;s wonderful users
                            are ready to help you, provide support, and answer
                            your burning questions so that you can reach the
                            level you want to be at in your new language.
                        </p>
                        <Link className="btn btn-primary" href="signup">
                            Start learning
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className="order-first mx-auto md:order-last">
                        <Image
                            src="/illustrations/join.webp"
                            alt="Join LangCorrect"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function IndexPage() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <CorrectionStepsSection />
                <FeaturesSection />
                <CTASection />
            </main>
        </>
    );
}
