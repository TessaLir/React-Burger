import React from "react";

interface IResponseOrderDetail {
  name: string;
  success: boolean;
  order: {
    number: number;
  };
}

export default IResponseOrderDetail;
