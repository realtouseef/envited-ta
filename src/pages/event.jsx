import { EventModal } from "@/components/EventModal";
import Head from "next/head";

const event = () => {
  return (
    <>
      <Head>
        <title>Create your event</title>
      </Head>
      <EventModal />
    </>
  );
};

export default event;
