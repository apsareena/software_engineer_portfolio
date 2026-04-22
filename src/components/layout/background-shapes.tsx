/**
 * background-shapes.tsx: Decorative geometric background shapes
 *
 * Renders static, low-opacity coloured shapes (circles, squares, triangles,
 * hexagons) positioned absolutely behind all page content. These shapes add
 * visual interest to the white background without affecting readability.
 *
 * Dependencies: app-constants
 * Used by: app/page.tsx
 */

import React from 'react';
import { Box } from '@mui/material';
import {
  COLOR_SHAPE_BLUE,
  COLOR_SHAPE_TEAL,
  COLOR_SHAPE_PURPLE,
  COLOR_SHAPE_PINK,
} from '@/constants/app-constants';

/**
 * Renders a set of decorative geometric shapes as a fixed background layer.
 * All shapes use low-opacity pastel colours and z-index -1 so they sit
 * behind all content.
 */
export default function BackgroundShapes() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {/* Large blue circle – top right */}
      <Box
        sx={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: 350,
          height: 350,
          borderRadius: '50%',
          backgroundColor: COLOR_SHAPE_BLUE,
        }}
      />

      {/* Small teal circle – middle left */}
      <Box
        sx={{
          position: 'absolute',
          top: '38%',
          left: '-60px',
          width: 200,
          height: 200,
          borderRadius: '50%',
          backgroundColor: COLOR_SHAPE_TEAL,
        }}
      />

      {/* Purple square (rotated 45°) – below mid right */}
      <Box
        sx={{
          position: 'absolute',
          top: '55%',
          right: '5%',
          width: 180,
          height: 180,
          backgroundColor: COLOR_SHAPE_PURPLE,
          transform: 'rotate(45deg)',
        }}
      />

      {/* Pink circle – bottom left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '8%',
          left: '10%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          backgroundColor: COLOR_SHAPE_PINK,
        }}
      />

      {/* Teal small square – upper middle */}
      <Box
        sx={{
          position: 'absolute',
          top: '22%',
          left: '35%',
          width: 100,
          height: 100,
          backgroundColor: COLOR_SHAPE_TEAL,
          transform: 'rotate(20deg)',
        }}
      />

      {/* Blue small circle – lower right */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '18%',
          right: '15%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          backgroundColor: COLOR_SHAPE_BLUE,
        }}
      />

      {/* Purple large circle – very bottom centre */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-100px',
          left: '42%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: COLOR_SHAPE_PURPLE,
        }}
      />
    </Box>
  );
}
