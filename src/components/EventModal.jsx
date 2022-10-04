import Image from "next/image";
import Button from "./Button";
import PerEvent from "./PerEvent";

export const EventModal = () => {
  return (
    <>
      <div>
        <main className="mb-10 font-satoshi_reg bg-[#fbfaff] text-gray-700 w-96 rounded-2xl shadow-sm">
          <section>
            <Image
              src="/assets/Birthdaycake.png"
              alt="envited birthday cake"
              height={320}
              width={400}
              objectFit="cover"
              className=" rounded-t-lg"
            />
          </section>
          <section className="px-4 py-2">
            <div className="mb-5">
              <h2 className="text-2xl font-satoshi_bold">Movie night</h2>
              <small className="text-sm text-gray-500">
                👋 Hosted by <strong>Elysia</strong>
              </small>
            </div>
            <div>
              <div className="bg-white px-3 py-2 rounded-md flex items-center justify-between space-x-4 mb-3">
                <p>
                  <strong>14</strong> responses •{" "}
                  <span className="text-purple-500 font-satoshi_med">
                    see guests
                  </span>
                </p>
                <button className="bg-purple-500 rounded-md">
                  <a className="pl-1 pr-2 py-1 text-white flex items-center justify-center">
                    <span className="text-xs mr-1">🤝</span> Invite
                  </a>
                </button>
              </div>
            </div>
            <PerEvent
              image="/assets/calendar.png"
              height={20}
              date="18 August 6:00pm"
              subData="to 19 August 1:00PM UTC +10"
            />

            <PerEvent
              image="/assets/location.png"
              height={25}
              date="Street name"
              subData="301 Rowes Lane, WA, 7183"
            />
            <PerEvent
              image="/assets/link.png"
              height={20}
              date="Link"
              subData="netflix.com"
            />
          </section>
        </main>
        <Button
          text="🎉 Created your Event"
          href="/create-event"
          disable={true}
        />
      </div>
    </>
  );
};
