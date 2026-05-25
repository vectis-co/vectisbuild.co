"use client";

import { useState, useEffect, type FormEvent } from "react";
import Image from "next/image";

const STORAGE_KEY = "vectis-notify-submitted";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setSubmitted(true);
    } catch {
      // localStorage may be unavailable (private mode, disabled cookies)
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: hook up Formspree or Vercel form handling
    setSubmitted(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  return (
    <>
      <div className="bg-layer" aria-hidden="true">
        <Image
          src="/rocket.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="rocket-img"
        />
      </div>
      <div className="overlay-layer" aria-hidden="true" />
      <div className="fade-top" aria-hidden="true" />
      <div className="fade-bottom" aria-hidden="true" />

      <main className="page">
        <header className="top">
          <div className="brand">
            <span className="wordmark">
              <span className="slash">/</span>vectis
            </span>
          </div>
          <div className="status" aria-label="System status: nominal">
            <span className="dot" aria-hidden="true" />
            <span className="status-label">SYS · NOMINAL</span>
          </div>
        </header>

        <section className="hero">
          <div className="hero-inner">
            <div className="section-label">
              <span>01 / PRE-LAUNCH</span>
              <span className="rule" aria-hidden="true" />
            </div>

            <h1 className="headline">
              We turn AI into<br />your advantage.
            </h1>
            <p className="subhead">
              Engineered to compound.<br />Designed to stand out.
            </p>

            <div className="system-status" aria-hidden="true">
              <span>SYSTEM INITIALIZING</span>
              <span className="dots">
                <span className="dotc">.</span>
                <span className="dotc">.</span>
                <span className="dotc">.</span>
              </span>
            </div>

            <div className="notify">
              <label
                htmlFor="notify-email"
                className="section-label notify-label"
              >
                <span>02 / NOTIFY ON LAUNCH</span>
                <span className="rule" aria-hidden="true" />
              </label>

              {!submitted ? (
                <form className="notify-form" onSubmit={handleSubmit}>
                  <input
                    id="notify-email"
                    type="email"
                    name="email"
                    placeholder="enter email"
                    required
                    autoComplete="email"
                    aria-label="Email address for launch notification"
                  />
                  <button
                    type="submit"
                    className="submit-btn"
                    aria-label="Notify me when /vectis launches"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              ) : (
                <div className="success" role="status">
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>{" "}
                  Signal received
                </div>
              )}
            </div>
          </div>
        </section>

        <footer className="bottom">
          <div className="bottom-left">
            ai implementation <span className="dot-o">·</span> advisory
          </div>
          <div className="bottom-right">vectisbuild.co</div>
        </footer>
      </main>

      <style jsx>{`
        .bg-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-color: var(--color-deep-ink);
          --rocket-obj-pos: center;
        }
        .bg-layer :global(.rocket-img) {
          object-fit: cover;
          object-position: var(--rocket-obj-pos);
        }
        .overlay-layer {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(14, 26, 38, 0.9) 0%,
            rgba(14, 26, 38, 0.65) 32%,
            rgba(14, 26, 38, 0.2) 58%,
            rgba(14, 26, 38, 0) 78%
          );
        }
        .fade-top {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(14, 26, 38, 0.6) 0%,
            rgba(14, 26, 38, 0) 100%
          );
        }
        .fade-bottom {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            0deg,
            rgba(14, 26, 38, 0.75) 0%,
            rgba(14, 26, 38, 0) 100%
          );
        }

        .page {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          min-height: 100svh;
          min-height: 100dvh;
          display: grid;
          grid-template-rows: auto 1fr auto;
          padding: 32px 56px;
          color: var(--color-mission-white);
          font-family: var(--font-plex-mono), ui-monospace, SFMono-Regular,
            monospace;
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .brand {
          display: flex;
          align-items: baseline;
          gap: 10px;
          min-width: 0;
        }
        .wordmark {
          font-weight: 500;
          font-size: 20px;
          color: var(--color-mission-white);
          letter-spacing: -0.01em;
        }
        .slash {
          color: var(--color-signal-orange);
        }
        .status {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-signal-green);
          box-shadow: 0 0 8px rgba(74, 222, 128, 0.75);
          animation: softPulse 1.8s ease-in-out infinite;
        }
        .status-label {
          font-size: 11px;
          font-weight: 500;
          color: var(--color-signal-green);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero {
          display: flex;
          align-items: center;
        }
        .hero-inner {
          max-width: 480px;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          color: rgba(255, 106, 26, 0.9);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 400;
          margin: 0 0 32px 0;
        }
        .rule {
          flex: 1;
          max-width: 80px;
          height: 1px;
          background: rgba(255, 106, 26, 0.3);
        }
        .headline {
          font-family: var(--font-plex-mono), ui-monospace, monospace;
          font-weight: 400;
          font-size: 38px;
          line-height: 1.16;
          letter-spacing: -0.02em;
          color: var(--color-mission-white);
          text-shadow: 0 2px 16px rgba(14, 26, 38, 0.7);
          margin: 0 0 20px 0;
        }
        .subhead {
          font-family: var(--font-newsreader), ui-serif, Georgia, serif;
          font-style: italic;
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 0;
          color: rgba(242, 242, 241, 0.85);
          text-shadow: 0 2px 16px rgba(14, 26, 38, 0.7);
          margin: 0 0 44px 0;
        }
        .system-status {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(242, 242, 241, 0.9);
          text-shadow: 0 1px 8px rgba(14, 26, 38, 0.6);
          margin-bottom: 44px;
        }
        .dots {
          display: inline-flex;
          margin-left: 4px;
        }
        .dotc {
          animation: blink 1.4s infinite both;
          color: rgba(242, 242, 241, 0.9);
        }
        .dotc:nth-child(1) {
          animation-delay: 0s;
        }
        .dotc:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dotc:nth-child(3) {
          animation-delay: 0.4s;
        }

        .notify {
          max-width: 380px;
          width: 100%;
        }
        .notify-label {
          margin-bottom: 14px;
          cursor: pointer;
        }
        .notify-form {
          display: flex;
          align-items: stretch;
          border-bottom: 1px solid rgba(242, 242, 241, 0.35);
          transition: border-color 200ms ease-out;
        }
        .notify-form:focus-within {
          border-bottom-color: rgba(255, 106, 26, 0.9);
        }
        .notify-form input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          outline: none;
          color: var(--color-mission-white);
          font-family: var(--font-plex-mono), ui-monospace, monospace;
          font-size: 14px;
          padding: 14px 0;
        }
        .notify-form input::placeholder {
          color: rgba(242, 242, 241, 0.45);
        }
        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          min-height: 44px;
          background: transparent;
          border: none;
          color: var(--color-signal-orange);
          font-family: var(--font-plex-mono), ui-monospace, monospace;
          font-size: 22px;
          line-height: 1;
          padding: 0 4px 0 12px;
          margin-right: -4px;
          transition: transform 180ms ease-out;
          cursor: pointer;
          border-radius: 4px;
        }
        .submit-btn:hover {
          transform: translateX(3px);
        }
        .submit-btn:focus-visible {
          outline: 2px solid var(--color-signal-orange);
          outline-offset: 4px;
        }
        .success {
          font-family: var(--font-plex-mono), ui-monospace, monospace;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-signal-green);
          border-bottom: 1px solid rgba(74, 222, 128, 0.45);
          padding: 18px 0;
          animation: fadeIn 0.3s ease-out;
        }
        .check {
          color: var(--color-signal-green);
          margin-right: 6px;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242, 242, 241, 0.7);
          text-shadow: 0 1px 6px rgba(14, 26, 38, 0.5);
        }
        .dot-o {
          color: rgba(255, 106, 26, 0.75);
        }

        @keyframes blink {
          0%,
          80%,
          100% {
            opacity: 0.2;
          }
          40% {
            opacity: 1;
          }
        }
        @keyframes softPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dot,
          .dotc,
          .success {
            animation: none;
          }
          .submit-btn {
            transition: none;
          }
          .submit-btn:hover {
            transform: none;
          }
          .notify-form {
            transition: none;
          }
        }

        @media (max-width: 880px) {
          .page {
            padding: 24px;
          }
          .bg-layer {
            --rocket-obj-pos: 78% center;
          }
          .overlay-layer {
            background: linear-gradient(
              180deg,
              rgba(14, 26, 38, 0.85) 0%,
              rgba(14, 26, 38, 0.7) 30%,
              rgba(14, 26, 38, 0.55) 55%,
              rgba(14, 26, 38, 0.6) 75%,
              rgba(14, 26, 38, 0.8) 100%
            );
          }
          .wordmark {
            font-size: 16px;
          }
          .headline {
            font-size: 28px;
          }
          .subhead {
            font-size: 16px;
            line-height: 24px;
          }
          .bottom {
            flex-wrap: wrap;
            gap: 8px;
            font-size: 10px;
          }
        }

        @media (min-width: 1440px) {
          .overlay-layer {
            background: linear-gradient(
              90deg,
              rgba(14, 26, 38, 0.92) 0%,
              rgba(14, 26, 38, 0.7) 30%,
              rgba(14, 26, 38, 0) 85%
            );
          }
        }

        @media (min-width: 1441px) {
          .bg-layer {
            --rocket-obj-pos: 35% center;
          }
        }

        @media (min-width: 1921px) {
          .bg-layer {
            --rocket-obj-pos: 25% center;
          }
        }
      `}</style>
    </>
  );
}
