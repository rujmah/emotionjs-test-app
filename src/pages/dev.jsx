import React, { useState } from "react";

import { Box, List, Modal } from "../components";

const Dev = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h2>Examples</h2>
      <List list={list} />
      <Box>Here is a cool box</Box>

      <div className="modal-demo">
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        <Modal show={showModal} closeCallback={() => setShowModal(false)}>
          This is a basic modal
        </Modal>
      </div>
    </>
  );
};

export default Dev;

export async function getStaticProps() {
  const list = [
    { id: "001", title: "Test Yeast" },
    { id: "401", title: "Jam jars with screws in" },
    { id: "041", title: "Yams!" },
    { id: "021", title: "Sushi is the only thing that I like" }
  ];
  return { props: { list } };
}
