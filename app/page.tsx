"use client";

import { useState, type FormEvent } from "react";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: hook up Formspree or Vercel form handling
    setSubmitted(true);
  }

  return (
    <>
      <div className="bg-layer" aria-hidden="true" />
      <div className="overlay-layer" aria-hidden="true" />
      <div className="fade-top" aria-hidden="true" />
      <div className="fade-bottom" aria-hidden="true" />

      <main className="page">
        <header className="top">
          <div className="brand">
            <span className="wordmark">
              <span className="slash">/</span>vectis
            </span>
            <span className="version">v1.0</span>
          </div>
          <div className="status">
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

            <div className="system-status">
              <span>SYSTEM INITIALIZING</span>
              <span className="dots" aria-hidden="true">
                <span className="dotc">.</span>
                <span className="dotc">.</span>
                <span className="dotc">.</span>
              </span>
            </div>

            <div className="notify">
              <div className="section-label notify-label">
                <span>02 / NOTIFY ON LAUNCH</span>
                <span className="rule" aria-hidden="true" />
              </div>

              {!submitted ? (
                <form className="notify-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter email"
                    required
                    autoComplete="email"
                    aria-label="email"
                  />
                  <button type="submit" aria-label="submit">→</button>
                </form>
              ) : (
                <div className="success" role="status">
                  <span className="check">✓</span> Signal received
                </div>
              )}
            </div>
          </div>
        </section>

        <footer className="bottom">
          <div className="bottom-left">
            <span className="slash-o">/</span>vectis <span className="dot-o">·</span> ai implementation <span className="dot-o">·</span> advisory
          </div>
          <div className="bottom-right">vectisbuild.co</div>
        </footer>
      </main>

      <style jsx>{`
        .bg-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-color: #0e1a26;
          background-image: url("/rocket.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .overlay-layer {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(14, 26, 38, 0.88) 0%,
            rgba(14, 26, 38, 0.6) 30%,
            rgba(14, 26, 38, 0.15) 55%,
            rgba(14, 26, 38, 0) 75%
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
            rgba(14, 26, 38, 0.7) 0%,
            rgba(14, 26, 38, 0) 100%
          );
        }

        .page {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          min-height: 100dvh;
          display: grid;
          grid-template-rows: auto 1fr auto;
          padding: 32px 56px;
          color: #f2f2f1;
          font-family: var(--font-plex-mono), ui-monospace, SFMono-Regular,
            monospace;
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .wordmark {
          font-weight: 500;
          font-size: 20px;
          color: #f2f2f1;
          letter-spacing: -0.01em;
        }
        .slash {
          color: #ff6a1a;
        }
        .version {
          font-size: 10px;
          font-weight: 400;
          color: rgba(242, 242, 241, 0.4);
          letter-spacing: 0.08em;
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
          background: #4ade80;
          box-shadow: 0 0 8px rgba(74, 222, 128, 0.75);
          animation: softPulse 1.8s ease-in-out infinite;
        }
        .status-label {
          font-size: 11px;
          font-weight: 500;
          color: rgba(74, 222, 128, 0.95);
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
          color: #f2f2f1;
          text-shadow: 0 2px 12px rgba(14, 26, 38, 0.4);
          margin: 0 0 20px 0;
        }
        .subhead {
          font-family: var(--font-plex-mono), ui-monospace, monospace;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.55;
          color: rgba(242, 242, 241, 0.72);
          text-shadow: 0 2px 12px rgba(14, 26, 38, 0.4);
          margin: 0 0 44px 0;
        }
        .system-status {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(242, 242, 241, 0.8);
          margin-bottom: 44px;
        }
        .dots {
          display: inline-flex;
          margin-left: 4px;
        }
        .dotc {
          animation: blink 1.4s infinite both;
          color: rgba(242, 242, 241, 0.8);
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
        }
        .notify-form {
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(242, 242, 241, 0.3);
          transition: border-color 200ms ease-out;
        }
        .notify-form:focus-within {
          border-bottom-color: rgba(255, 106, 26, 0.8);
        }
        .notify-form input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #f2f2f1;
          font-family: var(--font-plex-mono), ui-monospace, monospace;
          font-size: 14px;
          padding: 12px 0;
        }
        .notify-form input::placeholder {
          color: rgba(242, 242, 241, 0.35);
        }
        .notify-form button {
          background: transparent;
          border: none;
          color: #ff6a1a;
          font-family: var(--font-plex-mono), ui-monospace, monospace;
          font-size: 20px;
          padding: 8px 0 8px 12px;
          transition: transform 180ms ease-out;
          cursor: pointer;
        }
        .notify-form button:hover {
          transform: translateX(3px);
        }
        .success {
          font-family: var(--font-plex-mono), ui-monospace, monospace;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(74, 222, 128, 0.95);
          border-bottom: 1px solid rgba(74, 222, 128, 0.4);
          padding: 14px 0;
          animation: fadeIn 0.3s ease-out;
        }
        .check {
          color: #4ade80;
          margin-right: 4px;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242, 242, 241, 0.5);
        }
        .slash-o,
        .dot-o {
          color: rgba(255, 106, 26, 0.6);
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

        @media (max-width: 880px) {
          .page {
            padding: 24px;
          }
          .bg-layer {
            background-position: 70% center;
          }
          .overlay-layer {
            background: linear-gradient(
              180deg,
              rgba(14, 26, 38, 0.78) 0%,
              rgba(14, 26, 38, 0.3) 35%,
              rgba(14, 26, 38, 0.15) 55%,
              rgba(14, 26, 38, 0.55) 100%
            );
          }
          .wordmark {
            font-size: 16px;
          }
          .version {
            font-size: 9px;
          }
          .headline {
            font-size: 28px;
          }
          .subhead {
            font-size: 14px;
          }
          .bottom {
            flex-wrap: wrap;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}
