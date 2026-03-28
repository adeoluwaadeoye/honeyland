"use client";

import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    FastForward,
    Users,
    TrendingUp,
    ShieldCheck,
    Building2,
    HandHeart,
    MapPin,
} from "lucide-react";

import SectionHeader from "@/components/shared/SectionHeader";

export default function CommunityPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);
    const [speed, setSpeed] = useState(1);
    const [inView, setInView] = useState(false);
    const [time, setTime] = useState({ current: 0, duration: 0 });

    const formatTime = (sec: number) => {
        if (!sec || isNaN(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setInView(true);
        }, { threshold: 0.3 });

        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setMuted(videoRef.current.muted);
    };

    const changeSpeed = () => {
        if (!videoRef.current) return;
        const speeds = [1, 1.5, 2];
        const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
        videoRef.current.playbackRate = next;
        setSpeed(next);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const update = () => {
            setTime({
                current: video.currentTime,
                duration: video.duration || 0,
            });
        };

        video.addEventListener("timeupdate", update);
        video.addEventListener("loadedmetadata", update);

        return () => {
            video.removeEventListener("timeupdate", update);
            video.removeEventListener("loadedmetadata", update);
        };
    }, []);

    return (
        <div className="min-h-screen mt-16  text-gray-800">

            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <section className="max-w-5xl overflow-hidden">
                    <SectionHeader
                        label="Our COmmunity"
                        title="Sha! Sha! Sha! Waa!!!"
                    />
                </section>
                <p> This is a fully developing community system focused on structured growth, improved living standards, and coordinated local
                    development. Every initiative is designed to
                    strengthen infrastructure, empower residents, and improve overall quality of life
                    through consistent action and accountability.
                </p>

                {/* VIDEO */}
                <div className="mt-10">

                    <h3 className="text-center text-2xl">Our Members In Action</h3>

                    <div className="relative mt-4 w-full h-105 overflow-hidden rounded-md">

                        <video
                            ref={videoRef}
                            src="/assets/cda.mp4"
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            onClick={togglePlay}
                        />

                        {!playing && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="w-12 h-12 text-emerald-600" />
                            </div>
                        )}
                    </div>

                    {/* CENTER CONTROLS */}
                    <div className="flex justify-center mt-4">

                        <div className="flex items-center gap-6 px-6 py-3 rounded-full
              bg-white/80 backdrop-blur-md shadow-md text-gray-700">

                            <button onClick={togglePlay}>
                                {playing ? <Pause size={18} /> : <Play size={18} />}
                            </button>

                            <button onClick={toggleMute}>
                                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                            </button>

                            <button onClick={changeSpeed} className="flex items-center gap-1 text-emerald-600">
                                <FastForward size={16} />
                                x{speed}
                            </button>

                            <span className="text-sm font-medium">
                                {formatTime(time.current)} / {formatTime(time.duration)}
                            </span>

                        </div>

                    </div>
                </div>

            </section>

            {/* IMPACT SECTION */}
            <section ref={statsRef} className="max-w-7xl mx-auto px-6 mt-10">

                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <TrendingUp size={18} />
                    Governance Performance & Community Intelligence Dashboard
                </div>

                <p className="mt-4 text-gray-800 max-w-3xl leading-relaxed">
                    Community progress is continuously monitored through active participation,
                    development milestones, and service delivery outcomes. This ensures that growth
                    is visible, measurable, and directly connected to the needs of residents.
                </p>

                {/* IMAGE */}
                <div className="mt-10 relative h-64 w-full">
                    <Image
                        src="/assets/about-bg.jpg"
                        alt="Community engagement"
                        fill
                        className="object-cover rounded-md"
                    />
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed">
                    The development structure is built around improving everyday
                    community life through better infrastructure, stronger social
                    support systems, and inclusive participation. Each project is
                    focused on solving real local challenges and improving living
                    conditions across all areas of the community.
                </p>

                {/* KPI DASHBOARD */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">

                    <div className="text-center bg-white p-6 rounded-md shadow-sm">
                        <Users className="mx-auto text-emerald-600 mb-3" size={28} />
                        <p className="text-3xl font-bold">
                            {inView && <CountUp end={3000} duration={2.5} />}+
                        </p>
                        <p className="text-sm text-gray-500">Active Community Members</p>
                        <p className="text-xs text-gray-400 mt-2">+24% engagement growth</p>
                    </div>

                    <div className="text-center bg-white p-6 rounded-md shadow-sm">
                        <Building2 className="mx-auto text-emerald-600 mb-3" size={28} />
                        <p className="text-3xl font-bold">
                            {inView && <CountUp end={15} duration={2.5} />}+
                        </p>
                        <p className="text-sm text-gray-500">Completed and ongoing community development projects</p>
                        <p className="text-xs text-gray-400 mt-2">+42% execution efficiency</p>
                    </div>

                    <div className="text-center bg-white p-6 rounded-md shadow-sm">
                        <ShieldCheck className="mx-auto text-emerald-600 mb-3" size={28} />
                        <p className="text-3xl font-bold">
                            {inView && <CountUp end={92} duration={2.5} />}%
                        </p>
                        <p className="text-sm text-gray-500">Completed and ongoing community development projects</p>
                        <p className="text-xs text-gray-400 mt-2">audit verified transparency</p>
                    </div>

                </div>

                {/* VALUES + WRITEUP */}
                <div className="grid md:grid-cols-2 gap-12 mt-14">

                    {/* LEFT SIDE */}
                    <div className="space-y-6 text-gray-600 leading-relaxed">

                        <div>
                            <p className="font-semibold flex items-center gap-2 text-gray-800">
                                <HandHeart className="text-emerald-600" size={18} />
                                Collective Ownership Framework
                            </p>
                            <p>
                                Governance decisions are evaluated through collective benefit scoring models,
                                ensuring equitable impact distribution.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2 text-gray-800">
                                <ShieldCheck className="text-emerald-600" size={18} />
                                Audit-Driven Transparency
                            </p>
                            <p>
                                Every initiative is monitored through structured checkpoints and performance audits
                                to eliminate operational opacity.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2 text-gray-800">
                                <Users className="text-emerald-600" size={18} />
                                Distributed Governance Model
                            </p>

                            <div className="text-gray-600 leading-relaxed">

                                <p>
                                    Decisions are made with the wellbeing of residents as the priority. Every action is evaluated based on how it improves daily living conditions, strengthens unity, and supports long-term community growth.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE (NEW CONTENT TO FIX LAYOUT) */}
                    <div className="space-y-6 text-gray-600 leading-relaxed">

                        <div>
                            <p className="font-semibold flex items-center gap-2 text-gray-800">
                                <Building2 className="text-emerald-600" size={18} />
                                Infrastructure-First Development Model
                            </p>
                            <p>
                                Priority is given to physical and social infrastructure systems that directly improve daily living conditions, mobility, and access to essential services.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2 text-gray-800">
                                <TrendingUp className="text-emerald-600" size={18} />
                                Measurable Impact Framework
                            </p>
                            <p>
                                Every project is tracked using defined performance indicators to ensure progress is not theoretical but quantifiable and verifiable.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold flex items-center gap-2 text-gray-800">
                                <MapPin className="text-emerald-600" size={18} />
                                Localized Decision Systems
                            </p>
                            <p>
                                Governance is decentralized to reflect local realities, ensuring decisions are made closer to the people they affect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-7-xl px-16 py-2 mt-3 font-medium leading-relaxed tracking-wider">
                <p className="mt-4">
                    Transparency is maintained through open communication and consistent reporting, ensuring that residents are aware of ongoing developments and how resources are being used. This system is intentionally designed to eliminate ambiguity, reduce information gaps, and build long-term institutional trust.
                </p>

                <p className="mt-4">
                    Beyond reporting, accountability is enforced through continuous feedback loops, community validation processes, and structured oversight mechanisms. This ensures that governance remains responsive, not static or symbolic.
                </p>

                <p className="mt-4 font-medium text-gray-700">
                    Ultimately, the objective is simple: build a community where trust is not assumed — it is demonstrated, measured, and sustained through action.
                </p>
            </section>

            {/* CTA */}
            <section className="mt-1 mb-4 text-center py-4">
                <div className=" text-center mt-6">
                    <Link
                        href="/projects/current"
                        className=" bg-green-700 text-white px-6 py-3 font-medium hover:bg-emerald-800 transition-colors"
                    >
                        Get Involved
                    </Link>
                </div>
            </section>

        </div>
    );
}