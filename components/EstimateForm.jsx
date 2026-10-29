"use client";

import { useState } from "react";
import { business } from "../config/business";

export default function EstimateForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const fields = new FormData(form);
    const subject = `Estimate request - ${fields.get("name")}`;
    const body = [
      `Name: ${fields.get("name")}`,
      `Email: ${fields.get("email")}`,
      `Phone: ${fields.get("phone") || "Not provided"}`,
      `Service: ${fields.get("service")}`,
      "",
      "Project details:",
      fields.get("details"),
    ].join("\n");
    const mailto = `${business.emailLink}?${new URLSearchParams({
      subject,
      body,
    }).toString()}`;

    setNotice(
      "Your email app should open with this estimate request prefilled. Review the message and press Send to contact us.",
    );
    window.location.href = mailto;
  }

  return (
    <form className="estimate-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input
            autoComplete="name"
            name="name"
            required
            maxLength={100}
            placeholder="Your name"
          />
        </label>
        <label>
          Email
          <input
            autoComplete="email"
            name="email"
            type="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Phone <span className="optional">(optional)</span>
          <input
            autoComplete="tel"
            name="phone"
            type="tel"
            maxLength={40}
            placeholder="Your phone number"
          />
        </label>
        <label>
          Service
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Home remodeling</option>
            <option>Kitchen remodeling</option>
            <option>Bathroom remodeling</option>
            <option>Flooring installation</option>
            <option>Tile installation</option>
            <option>Custom carpentry</option>
            <option>Painting or drywall repair</option>
            <option>General construction</option>
            <option>Other home improvement</option>
          </select>
        </label>
        <label className="form-full">
          Project details
          <textarea
            name="details"
            rows="4"
            required
            maxLength={3000}
            placeholder="Tell us what you would like to improve."
          />
        </label>
      </div>
      <button className="btn btn-primary" type="submit">
        Prepare estimate email
      </button>
      <p className="form-note">
        This form opens your email app; it does not send anything automatically.
        You must review and send the email yourself.
      </p>
      <p className="form-notice" role="status" aria-live="polite">
        {notice}
      </p>
    </form>
  );
}
