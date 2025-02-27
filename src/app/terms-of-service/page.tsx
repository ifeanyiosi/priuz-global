"use client";

import Head from "next/head";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Your Business Name</title>
        <meta
          name="description"
          content="Terms and conditions for Your Business Name, outlining usage policies and legal agreements."
        />
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-gray-700 mb-4">
            Welcome to Your Business Name. By using our services, you agree to
            comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-4">
            By accessing or using our services, you acknowledge that you have
            read, understood, and agree to be bound by these terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            2. Use of Services
          </h2>
          <p className="text-gray-700 mb-4">
            You agree to use our services only for lawful purposes and in
            accordance with these terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            3. Account Responsibilities
          </h2>
          <p className="text-gray-700 mb-4">
            You are responsible for maintaining the confidentiality of your
            account and password and for restricting access to your account.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-4">
            We are not liable for any damages resulting from the use or
            inability to use our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">
            5. Changes to Terms
          </h2>
          <p className="text-gray-700 mb-4">
            We may update these terms from time to time. Continued use of our
            services constitutes acceptance of the new terms.
          </p>

          <p className="text-gray-700 mt-6">
            For any questions, please contact us at{" "}
            <Link
              href="mailto:priuzcaglobal@gmail.com"
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
