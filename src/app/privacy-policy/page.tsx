"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full bg-white p-8 rounded-2xl mt-20 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mb-4">
            At Your Business Name, we value your privacy. This Privacy Policy
            explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We may collect personal information such as your name, email, phone
            number, and location when you interact with us.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            Your data is used to provide and improve our services, process
            transactions, and communicate important updates.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            3. Data Security
          </h2>
          <p className="text-gray-700 mb-4">
            We implement strict security measures to safeguard your information
            from unauthorized access or disclosure.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            4. Third-Party Sharing
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell or rent your personal information. However, we may
            share data with trusted partners to facilitate our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            5. Your Rights
          </h2>
          <p className="text-gray-700 mb-4">
            You have the right to access, update, or request deletion of your
            personal data. Contact us for any concerns.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            6. Updates to This Policy
          </h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy periodically. Changes will be
            posted on this page.
          </p>

          <p className="text-gray-700 mt-6">
            For any questions, please contact us at{" "}
            <Link
              href="mailto:support@yourbusiness.com"
              className="text-blue-600 underline"
            >
              priuzcaglobal@gmail.com
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
