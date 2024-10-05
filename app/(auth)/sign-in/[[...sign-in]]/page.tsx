import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "w-full shadow-xl bg-white p-6 rounded-lg",
              header: "hidden",
              footer: "hidden",
              formButtonPrimary:
                "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md px-4 py-2 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-all duration-200",
              formFieldInput:
                "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200",
              formFieldLabel: "text-sm font-medium text-gray-700",
              identityPreviewText: "text-sm text-gray-600",
              identityPreviewEditButton:
                "text-purple-600 hover:text-purple-700",
              formResendCodeLink: "text-purple-600 hover:text-purple-700",
            },
          }}
        />
      </div>
    </div>
  );
}
