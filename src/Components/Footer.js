import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { GrHomeRounded } from 'react-icons/gr';
import { IoStatsChartOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { DivFooter } from '../Style/Components/Footer';

export default function Footer() {
  return (
    <DivFooter>
      <GrHomeRounded />
      <IoStatsChartOutline />
      <FaRegUser />
      <MdLogout/>
    </DivFooter>
  )
}