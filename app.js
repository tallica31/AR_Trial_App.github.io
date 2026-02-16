window.addEventListener('DOMContentLoaded', () => {
  const marker = document.querySelector('#marker');
  const highlightBox = document.querySelector('#highlight-box');
  const tapTarget = document.querySelector('#tap-target');
  const statusText = document.querySelector('#status');
  const resetButton = document.querySelector('#reset-button');

  let spawnedObject = null;

  const setStatus = (text) => {
    statusText.textContent = text;
  };

  const spawnObject = () => {
    if (spawnedObject) {
      return;
    }

    const sphere = document.createElement('a-sphere');
    sphere.setAttribute('id', 'spawned-object');
    sphere.setAttribute('position', '0 0.45 0');
    sphere.setAttribute('radius', '0.2');
    sphere.setAttribute('color', '#ff4f81');
    sphere.setAttribute('material', 'metalness: 0.2; roughness: 0.35;');
    sphere.setAttribute(
      'animation__pop',
      'property: scale; from: 0.05 0.05 0.05; to: 1 1 1; dur: 350; easing: easeOutBack;'
    );
    sphere.setAttribute(
      'animation__float',
      'property: position; dir: alternate; dur: 1300; loop: true; to: 0 0.6 0; easing: easeInOutSine;'
    );

    marker.appendChild(sphere);
    spawnedObject = sphere;
    setStatus('🎉 タップ成功！3Dオブジェクトを表示しました。');
  };

  marker.addEventListener('markerFound', () => {
    highlightBox.setAttribute('visible', true);
    tapTarget.setAttribute('visible', true);
    setStatus('✅ 物体を認識しました。ハイライト領域をタップしてください。');
  });

  marker.addEventListener('markerLost', () => {
    highlightBox.setAttribute('visible', false);
    tapTarget.setAttribute('visible', false);
    setStatus('👀 マーカーが見えなくなりました。再度カメラに映してください。');
  });

  tapTarget.addEventListener('click', spawnObject);

  resetButton.addEventListener('click', () => {
    if (spawnedObject) {
      spawnedObject.remove();
      spawnedObject = null;
      setStatus('♻️ リセットしました。もう一度タップして3Dオブジェクトを表示できます。');
      return;
    }

    setStatus('ℹ️ まだ3Dオブジェクトは表示されていません。マーカー検出後にタップしてください。');
  });
});
