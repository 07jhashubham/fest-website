"use client"
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Page = () => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 1;

  const renderer = new THREE.WebGLRenderer();

  const containerRef = useRef();

  useEffect(() => {
    // This code will only run on the client side.
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    }

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div className="h-screen">
      <div ref={containerRef} className="background"></div>
    </div>
  );
};

export default Page;
