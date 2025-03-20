interface statusProps {
  status: "loading" | "success" | "error";
}

const Status = ({ status }: statusProps) => {
  let messg;
  if (status === "error") {
    messg = "Error in Fetching Data";
  } else if (status === "success") {
    messg = "Data Fetched Successfully!";
  } else if (status === "loading") {
    messg = "Loading ...";
  } else {
    messg = "Invalid Value";
  }

  return (
    <section className=" mt-3">
      <h4> API Data Status : {messg} </h4>
    </section>
  );
};

export default Status;
