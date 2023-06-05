import { useEffect, useState } from "react";
import { fetchTopics } from "../../../utils/api";

const FilterOptions = ({ isChecked, setIsChecked }) => {
  const [topics, setTopics] = useState([]);
  const [checkedKey, setCheckedKey] = useState("");

  useEffect(() => {
    fetchTopics().then((topics) => setTopics(topics));
  }, []);

  return (
    <div>
      <p>Topics</p>
      {topics.map(({ slug }, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              id={slug}
              name="topic"
              value={slug}
              checked={checkedKey === slug && isChecked}
              onChange={(e) => setCheckedKey(e.target.value)}
              onClick={() =>
                setIsChecked((state) =>
                  state && checkedKey !== slug ? state : !state
                )
              }
            />
            <label htmlFor={slug}>{slug}</label>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
