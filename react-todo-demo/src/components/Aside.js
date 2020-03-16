import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { doAction, appActTypes, todoActTypes } from "@/redux/actions";

const Footer = props => {
  const targets = useSelector(state => state.getIn(["todo", "targets"]));
  const curTarget = useSelector(state => state.getIn(["todo", "curTarget"]));
  const dispatch = useDispatch();
  let handleClickTarget = targetId => {
    const action = doAction(todoActTypes.CUR_TARGET_SET)(targetId);
    dispatch(action);
  };
  return (
    <aside id="app-aside">
      <div className="aside-item add-item">
        <PlusOutlined />
        添加目标
      </div>
      {targets.map(item => {
        let itemCla = "aside-item target-item";
        itemCla += item.id === curTarget ? " active" : "";
        return (
          <div
            className={itemCla}
            key={item.id}
            onClick={() => handleClickTarget(item.id)}
          >
            {item.title}
          </div>
        );
      })}
    </aside>
  );
};

export { Footer as default };
