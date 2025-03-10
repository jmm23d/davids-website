
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Make the background transparent
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);
    
    // Create geometric objects - a modern engineering-inspired structure
    const group = new THREE.Group();
    
    // Create base platform
    const platformGeometry = new THREE.BoxGeometry(5, 0.2, 5);
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.7,
      roughness: 0.2,
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -2;
    group.add(platform);
    
    // Create pillars
    const pillarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 32);
    const pillarMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.1,
    });
    
    // Add pillars at each corner
    const pillarPositions = [
      [-2, -0.5, -2],
      [2, -0.5, -2],
      [-2, -0.5, 2],
      [2, -0.5, 2]
    ];
    
    pillarPositions.forEach(position => {
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(position[0], position[1], position[2]);
      group.add(pillar);
    });
    
    // Create a sphere representing a molecular or technical concept
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      metalness: 0.2,
      roughness: 0.8,
      transparent: true,
      opacity: 0.9
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.y = 1;
    group.add(sphere);
    
    // Create orbiting rings (like electron orbits or technical illustration)
    const ringGeometry = new THREE.TorusGeometry(1.2, 0.03, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.5,
      roughness: 0.5,
      transparent: true,
      opacity: 0.8
    });
    
    // Create multiple rings at different angles
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.position.y = 1;
    group.add(ring1);
    
    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring2.position.y = 1;
    ring2.rotation.x = Math.PI / 2;
    group.add(ring2);
    
    const ring3 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring3.position.y = 1;
    ring3.rotation.z = Math.PI / 2;
    group.add(ring3);
    
    // Add small spheres representing atoms or connection points
    const smallSphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const smallSphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.2
    });
    
    // Create 8 small spheres positioned at different points on the rings
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const x = Math.cos(angle) * 1.2;
      const z = Math.sin(angle) * 1.2;
      
      const smallSphere = new THREE.Mesh(smallSphereGeometry, smallSphereMaterial);
      smallSphere.position.set(x, 1, z);
      group.add(smallSphere);
    }
    
    scene.add(group);
    
    // Position the camera
    camera.position.z = 6;
    camera.position.y = 1;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the entire group slowly
      group.rotation.y += 0.005;
      
      // Animate the rings
      ring1.rotation.x += 0.01;
      ring2.rotation.y += 0.01;
      ring3.rotation.z += 0.01;
      
      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      [
        platformGeometry, platformMaterial,
        pillarGeometry, pillarMaterial,
        sphereGeometry, sphereMaterial,
        ringGeometry, ringMaterial,
        smallSphereGeometry, smallSphereMaterial
      ].forEach(item => item.dispose());
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeScene;
