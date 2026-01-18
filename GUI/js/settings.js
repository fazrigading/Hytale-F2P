
let customJavaCheck;
let customJavaOptions;
let customJavaPath;
let browseJavaBtn;
let settingsPlayerName;
let gpuPreferenceRadios;

export function initSettings() {
  setupSettingsElements();
  loadAllSettings();
}

function setupSettingsElements() {
  customJavaCheck = document.getElementById('customJavaCheck');
  customJavaOptions = document.getElementById('customJavaOptions');
  customJavaPath = document.getElementById('customJavaPath');
  browseJavaBtn = document.getElementById('browseJavaBtn');
  settingsPlayerName = document.getElementById('settingsPlayerName');
  gpuPreferenceRadios = document.querySelectorAll('input[name="gpuPreference"]');

  if (customJavaCheck) {
    customJavaCheck.addEventListener('change', toggleCustomJava);
  }

  if (browseJavaBtn) {
    browseJavaBtn.addEventListener('click', browseJavaPath);
  }

  if (settingsPlayerName) {
    settingsPlayerName.addEventListener('change', savePlayerName);
  }

  if (gpuPreferenceRadios) {
    gpuPreferenceRadios.forEach(radio => {
      radio.addEventListener('change', async () => {
        await saveGpuPreference();
        await updateGpuLabel();
      });
    });
  }
  }

function toggleCustomJava() {
  if (!customJavaOptions) return;
  
  if (customJavaCheck && customJavaCheck.checked) {
    customJavaOptions.style.display = 'block';
  } else {
    customJavaOptions.style.display = 'none';
    if (customJavaPath) customJavaPath.value = '';
    saveCustomJavaPath('');
  }
}

async function browseJavaPath() {
  try {
    if (window.electronAPI && window.electronAPI.browseJavaPath) {
      const result = await window.electronAPI.browseJavaPath();
      if (result && result.filePaths && result.filePaths.length > 0) {
        const selectedPath = result.filePaths[0];
        if (customJavaPath) {
          customJavaPath.value = selectedPath;
        }
        await saveCustomJavaPath(selectedPath);
      }
    }
  } catch (error) {
    console.error('Error browsing Java path:', error);
  }
}

async function saveCustomJavaPath(path) {
  try {
    if (window.electronAPI && window.electronAPI.saveJavaPath) {
      await window.electronAPI.saveJavaPath(path);
    }
  } catch (error) {
    console.error('Error saving custom Java path:', error);
  }
}

async function loadCustomJavaPath() {
  try {
    if (window.electronAPI && window.electronAPI.loadJavaPath) {
      const savedPath = await window.electronAPI.loadJavaPath();
      if (savedPath && savedPath.trim()) {
        if (customJavaPath) {
          customJavaPath.value = savedPath;
        }
        if (customJavaCheck) {
          customJavaCheck.checked = true;
        }
        if (customJavaOptions) {
          customJavaOptions.style.display = 'block';
        }
      }
    }
  } catch (error) {
    console.error('Error loading custom Java path:', error);
  }
}

async function savePlayerName() {
  try {
    if (window.electronAPI && window.electronAPI.saveUsername && settingsPlayerName) {
      const playerName = settingsPlayerName.value.trim() || 'Player';
      await window.electronAPI.saveUsername(playerName);
    }
  } catch (error) {
    console.error('Error saving player name:', error);
  }
}

async function loadPlayerName() {
  try {
    if (window.electronAPI && window.electronAPI.loadUsername && settingsPlayerName) {
      const savedName = await window.electronAPI.loadUsername();
      if (savedName) {
        settingsPlayerName.value = savedName;
      }
    }
  } catch (error) {
    console.error('Error loading player name:', error);
  }
}

async function saveGpuPreference() {
  try {
    if (window.electronAPI && window.electronAPI.saveGpuPreference && gpuPreferenceRadios) {
      const gpuPreference = Array.from(gpuPreferenceRadios).find(radio => radio.checked)?.value || 'auto';
      await window.electronAPI.saveGpuPreference(gpuPreference);
    }
  } catch (error) {
    console.error('Error saving GPU preference:', error);
  }
}

async function updateGpuLabel() {
  const detectionInfo = document.getElementById('gpu-detection-info');
  if (!detectionInfo) return;

  if (gpuPreferenceRadios) {
    const checked = Array.from(gpuPreferenceRadios).find(radio => radio.checked);
    if (checked && checked.value === 'auto') {
      try {
        if (window.electronAPI && window.electronAPI.getDetectedGpu) {
          const detected = await window.electronAPI.getDetectedGpu();
          detectionInfo.textContent = `Detected: ${detected.vendor.toUpperCase()} GPU (${detected.mode})`;
          detectionInfo.style.display = 'block';
        }
      } catch (error) {
        console.error('Error getting detected GPU:', error);
        detectionInfo.style.display = 'none';
      }
    } else {
      detectionInfo.style.display = 'none';
    }
  } else {
    detectionInfo.style.display = 'none';
  }
}

async function loadGpuPreference() {
  try {
    if (window.electronAPI && window.electronAPI.loadGpuPreference && gpuPreferenceRadios) {
      const savedPreference = await window.electronAPI.loadGpuPreference();
      if (savedPreference) {
        for (const radio of gpuPreferenceRadios) {
          if (radio.value === savedPreference) {
            radio.checked = true;
            break;
          }
        }
        await updateGpuLabel();
      }
    }
  } catch (error) {
    console.error('Error loading GPU preference:', error);
  }
}

async function loadAllSettings() {
  await loadCustomJavaPath();
  await loadPlayerName();
  await loadGpuPreference();
}

async function openGameLocation() {
  try {
    if (window.electronAPI && window.electronAPI.openGameLocation) {
      await window.electronAPI.openGameLocation();
    }
  } catch (error) {
    console.error('Error opening game location:', error);
  }
}

export function getCurrentJavaPath() {
  if (customJavaCheck && customJavaCheck.checked && customJavaPath) {
    return customJavaPath.value.trim();
  }
  return '';
}


export function getCurrentPlayerName() {
  if (settingsPlayerName && settingsPlayerName.value.trim()) {
    return settingsPlayerName.value.trim();
  }
  return 'Player';
}

// Make openGameLocation globally available
window.openGameLocation = openGameLocation;

document.addEventListener('DOMContentLoaded', initSettings);

window.SettingsAPI = {
  getCurrentJavaPath,
  getCurrentPlayerName
};