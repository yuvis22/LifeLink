import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donation Process | LifeLink",
  description:
    "Learn about the blood donation process, from registration to post-donation care.",
};

export default function DonationProcessPage() {
  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        The Donation Process
      </h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-8">
          Donating blood is a simple process that typically takes about an hour
          from start to finish. This guide walks you through each step of the
          donation process so you know exactly what to expect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                1
              </div>
              <h2 className="text-xl font-semibold">Registration</h2>
            </div>
            <p>
              Upon arrival, you'll check in at the registration desk. You'll
              need to present a valid ID and complete a donor registration form.
              This includes your contact information and basic health
              information.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Time:</strong> Approximately 5-10 minutes
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                2
              </div>
              <h2 className="text-xl font-semibold">Health History</h2>
            </div>
            <p>
              You'll complete a confidential health history questionnaire to
              ensure your safety and the safety of patients who receive your
              blood. This may be done on a computer or tablet.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Time:</strong> Approximately 10-15 minutes
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                3
              </div>
              <h2 className="text-xl font-semibold">Mini-Physical</h2>
            </div>
            <p>
              A trained staff member will check your temperature, pulse, blood
              pressure, and hemoglobin level. Your hemoglobin will be tested
              using a small drop of blood from your fingertip.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Time:</strong> Approximately 5 minutes
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                4
              </div>
              <h2 className="text-xl font-semibold">Donation</h2>
            </div>
            <p>
              You'll be seated in a comfortable chair. A phlebotomist will clean
              your arm and insert a new, sterile needle. The actual blood
              collection usually takes about 8-10 minutes. You'll donate
              approximately one pint of blood.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Time:</strong> Approximately 10-15 minutes
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                5
              </div>
              <h2 className="text-xl font-semibold">Refreshments</h2>
            </div>
            <p>
              After donating, you'll be invited to a refreshment area where you
              can enjoy a snack and a drink. It's important to replenish fluids
              and rest for at least 15 minutes before leaving.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Time:</strong> Minimum 15 minutes
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                6
              </div>
              <h2 className="text-xl font-semibold">Post-Donation Care</h2>
            </div>
            <p>
              You'll receive instructions on caring for your donation site and
              general post-donation advice. Your body will replace the fluid
              lost during donation within 24 hours, and red blood cells within
              4-6 weeks.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Different Types of Donations
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-100 border-b text-left">
                  Donation Type
                </th>
                <th className="py-3 px-6 bg-gray-100 border-b text-left">
                  What's Collected
                </th>
                <th className="py-3 px-6 bg-gray-100 border-b text-left">
                  Time Required
                </th>
                <th className="py-3 px-6 bg-gray-100 border-b text-left">
                  Donation Frequency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6 border-b font-medium">Whole Blood</td>
                <td className="py-3 px-6 border-b">
                  Blood cells, plasma, and platelets
                </td>
                <td className="py-3 px-6 border-b">About 1 hour</td>
                <td className="py-3 px-6 border-b">Every 56 days</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b font-medium">Power Red</td>
                <td className="py-3 px-6 border-b">Double red blood cells</td>
                <td className="py-3 px-6 border-b">About 1.5 hours</td>
                <td className="py-3 px-6 border-b">Every 112 days</td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b font-medium">Platelet</td>
                <td className="py-3 px-6 border-b">Platelets only</td>
                <td className="py-3 px-6 border-b">About 2-3 hours</td>
                <td className="py-3 px-6 border-b">
                  Every 7 days (up to 24 times/year)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-6 border-b font-medium">Plasma</td>
                <td className="py-3 px-6 border-b">Plasma only</td>
                <td className="py-3 px-6 border-b">About 1-2 hours</td>
                <td className="py-3 px-6 border-b">Every 28 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          After Your Donation
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Post-Donation Tips</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Keep the bandage on your arm for at least 4 hours</li>
            <li>
              Avoid heavy lifting or strenuous exercise for the rest of the day
            </li>
            <li>Drink extra fluids for the next 48 hours</li>
            <li>Eat iron-rich foods to help replenish iron stores</li>
            <li>
              If you feel dizzy or lightheaded, sit or lie down until you feel
              better
            </li>
            <li>
              Contact the donation center if you develop any unusual symptoms
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          What Happens to Your Blood
        </h2>
        <p className="mb-4">
          After collection, your donation goes through several steps:
        </p>
        <ol className="list-decimal pl-6 mb-6">
          <li>
            <strong>Testing:</strong> Your blood is tested for blood type and
            infectious diseases
          </li>
          <li>
            <strong>Processing:</strong> Whole blood is separated into its
            components: red cells, platelets, and plasma
          </li>
          <li>
            <strong>Storage:</strong> Components are stored appropriately (red
            cells for up to 42 days, platelets for 5 days, plasma can be frozen
            for up to a year)
          </li>
          <li>
            <strong>Distribution:</strong> Blood products are sent to hospitals
            where they're needed
          </li>
        </ol>

        <div className="mt-8 p-6 bg-rose-50 rounded-lg">
          <h3 className="text-xl font-semibold text-rose-700 mb-4">
            Ready to Donate?
          </h3>
          <p className="text-gray-800 mb-4">
            Book your appointment today and join the community of lifesavers.
            The entire process is quick, safe, and could help save up to three
            lives with just one donation.
          </p>
          <div className="mt-4">
            <a
              href="/schedule"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-6 rounded inline-flex items-center"
            >
              Schedule Your Donation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
