import React from 'react'

const TitleSkeleton = ({ titleWidth }: { titleWidth: string }) => {
  return (
    <div
      className="bg-slate-300 rounded"
      style={{
        width: `${titleWidth}`,
        height: "24px"
      }}></div>
  )
}

const ButtonSkeleton = ({ btnWidth }: { btnWidth: string }) => {
  return (
    <div
      className={`bg-slate-300 rounded`}
      style={{
        width: `${btnWidth}`,
        height: "21px"
      }}></div>
  )
}

const OneUserSkeleton = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px"
    }}>
      <TitleSkeleton titleWidth="100px" />
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "185px",
        justifyContent: "space-between"
      }}>
        <ButtonSkeleton btnWidth="100px" />
        <ButtonSkeleton btnWidth="60px" />
      </div>
    </div>
  )
}

export default OneUserSkeleton