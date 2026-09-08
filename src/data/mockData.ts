import { UserProfile, Project, ResearchItem, GalleryItem, PaperItem, BlogPost } from "../types";

export const initialProfile: UserProfile = {
  "name": "황지호",
  "engName": "Ji-Ho Hwang",
  "title": "AI/ML&임베디드 신입 엔지니어 ",
  "headline": "AI를 중심으로, 탄탄한 공학적 기반 위에서 Embedded System까지 확장하는 엔지니어입니다.",
  "subHeadline": "전자공학 학부 졸업예정 | GPA 3.92/4.5 | 정보처리기사 | 학부연구생 1년 | 하드웨어·임베디드·AI",
  "bio": "안녕하세요! 숙명여자대학교 전자공학과 졸업예정 신입 지원자 황지호입니다.\n\n전공 수업과 실습을 통해 회로 이론, 디지털 논리 회로, 마이크로프로세서, 신호 및 시스템 기초를 탄탄히 다졌으며, 1년간 컴퓨터비전 학부연구생으로 활동하며 반도체 Wafermap AI 연구 및 모델 경량화 실무 과제를 수행했습니다.\n\n경력은 없지만, 4층 Custom PCB 회로 설계부터 Verilog FPGA FSM 구현, STM32 FreeRTOS 펌웨어, Jetson Orin Edge AI 배포까지 직접 보드를 제작하고 오실로스코프로 디버깅해보며 검증한 실전 프로젝트 경험을 보유하고 있습니다.\n\n신입 엔지니어로서 빠르고 적극적으로 배우며 팀과 회사에 가치를 더하겠습니다.",
  "email": "jihohwang.tec@gmail.com",
  "github": "https://github.com/jiho-hwang-tec",
  "linkedin": "https://linkedin.com/in/jiho-hwang-ee",
  "location": "Seoul, South Korea",
  "labName": "VIPL",
  "university": "숙명여자대학교 전자공학전공",
  "major": "전자공학전공 ",
  "gpa": "3.57 / 4.5",
  "photoUrl": "https://i.ibb.co/4wkgNy68/Chat-GPT-Image-2026-8-28-04-21-01.png",
  "photoWidth": 280,
  "photoAlign": "center",
  "homeCatchphrase": "AI를 중심으로 탄탄한 공학적 기반 위에서\nEmbedded System까지 유연하게 확장하며 문제를 해결하는 신입 엔지니어입니다.",
  "homeBadges": [
    "AI",
    "ML",
    "ComputerVision",
    "Embedded"
  ],
  "homeCtaText": "이력서 (PDF) 다운로드",
  "homeSummaryTitle": "[신입 포부] 빠른 학습 능력과 강한 정직함으로 기여하겠습니다.",
  "homeSummaryDesc": "숙명여대 전자공학과 전공(학점 3.92/4.5) 과정과 AI 랩 학부연구생 1년 경험으로 회로 및 컴퓨터비전 기초 프로젝트를 완수했습니다.",
  "homeLabRole": "Computer vision 연구실 VIPL (1년 6개월)",
  "homeCertifications": "",
  "aboutTag": "PROFILE & SKILLS",
  "aboutTitle": "01. ABOUT ME ",
  "aboutBioTitle": "자기소개 (Introduce)",
  "academicTitle": "학력 사항",
  "labTitle": "학부연구생 활동",
  "labRole": "ComputerVision 학부 연구생 (1년 6개월)",
  "labSubject": "반도체 Wafermap AI 연구",
  "contactTitle": "CONTACT INFORMATION",
  "techStackTitle": "보유 기술 스택 (Tech Stack)",
  "techStackSubtag": "BASIC & PRACTICAL",
  "techStackNote": "💡 학부 전공 수업과 1년의 랩실 경험을 통해 실무 기초 및 디버깅 능력을 습득했습니다.",
  "skillCategories": [
    {
      "title": "AI & Computer Vision (AI & CV)",
      "skills": [
        "Python",
        "PyTorch",
        "OpenCV",
        "NumPy",
        "Matplotlib",
        "pandas",
        "scikit-learn",
        "LLM",
        "Generative AI",
        "TensorBoard"
      ],
      "color": "border-l-emerald-600"
    },
    {
      "title": "하드웨어 & 임베디드 (HW & Embedded)",
      "skills": [
        "FPGA",
        "verilog",
        "Digital Logic",
        "CAD"
      ],
      "color": "border-l-indigo-600"
    },
    {
      "title": "개발 도구 (Tools & Environment)",
      "skills": [
        "Linux (Ubuntu)",
        "VS Code",
        "Jupyter Lab"
      ],
      "color": "border-l-amber-600"
    }
  ],
  "projectCategories": [
    "CV/ML",
    "etc."
  ],
  "projectsTag": "UNDERGRADUATE PROJECTS",
  "projectsTitle": "02. 프로젝트 (Lab Work & Projects)",
  "photoOffsetX": 20,
  "photoOffsetY": 0
};

export const initialProjects: Project[] = [
  {
    "id": "proj-wafermap-ai",
    "title": "WaferCLIP",
    "subtitle": "텍스트 프롬프트를 기반으로 희귀 웨이퍼 결함 이미지를 생성해 클래스 불균형을 완화하고, wafermap inspection model의 성능을 향상시키는 데이터 증강 framework",
    "category": "CV/ML",
    "featured": true,
    "tags": [
      "PyTorch",
      "CLIP",
      "Wafermap",
      "OpenCV",
      "pandas"
    ],
    "date": "2024.12 - 2025.10 ",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "overview": "반도체 제조 라인에서 수집되는 Wafermap 결함 데이터의 극심한 클래스 불균형(Class Imbalance) 및 Unseen Defect 문제 해결을 위한 융합 엔지니어링 프레임워크입니다. 경량화된 Diffusion 생성 모델로 불균형 결함 패턴을 합성 및 증강하고, Fine-tuned CLIP 멀티모달 프레임워크를 적용하여 레이블이 없는 새로운 결함까지 높은 정확도로 분류합니다.",
    "purpose": "반도체 수율(Yield) 향상을 위한 실시간 결함 분석 자동화. 기존 CNN 모델의 한계인 미수집 결함 패턴 인식 불가 및 학습 데이터 부족 문제를 해결하여 반도체 에지 검사 장비에 적용 가능한 수준의 추론 속도와 정확도를 달성하고자 함.",
    "systemArchitecture": [
      "1. Real Wafermap Die Matrix Data Input (WM-811K Dataset & Industrial Cleanroom Logs)",
      "2. Light-weight Latent Diffusion Generator -> High-Fidelity Synthetic Wafermap Data Augmentation",
      "3. Multi-modal Prompt Engineering (Text Description + Spatial Die Grid Embeddings)",
      "4. CLIP Vision Transformer Backbone + Lightweight Defect Classification Head",
      "5. TensorRT FP16/INT8 Model Quantization Pipeline",
      "6. Edge Industrial Inspection Workstation Deployment (Inference < 25ms)"
    ],
    "circuitSchematics": {
      "pcbLayers": "N/A (AI & Inspection Software Framework)",
      "keyComponents": [
        {
          "name": "NVIDIA Jetson Orin Nano 8GB",
          "spec": "40 TOPS AI Processing",
          "description": "라인 에지 검사 단말기 추론용 Board"
        },
        {
          "name": "TensorRT 8.6 Engine",
          "spec": "INT8 Precision Quantization",
          "description": "FP32 대비 4.2배 속도 향상 및 메모리 절감"
        },
        {
          "name": "Industrial Optical Scanner API",
          "spec": "GigE Vision Protocol",
          "description": "고속 실시간 웨이퍼 Die 이미지 스트리밍"
        }
      ],
      "powerDesign": "Edge Inspection Station 12V 3A Regulated Power Line"
    },
    "aiModelDetails": {
      "modelType": "Lightweight Latent Diffusion + Multi-Modal Vision-Language CLIP (ViT-B/16)",
      "dataset": "WM-811K Real Industrial Wafermap Dataset (811,472 wafer maps) + Lab Synthetic Augmentation",
      "trainingProcess": "PyTorch DDP, Cosine Annealing LR, Prompt-Tuning for 8 Core Pattern Classes (Center, Donut, Edge-Ring, Edge-Loc, Scratch, Random, Loc, Near-Full)",
      "quantization": "TensorRT INT8 Calibration using Entropy Calibrator v2, Memory Footprint 4.2GB -> 1.1GB"
    },
    "metrics": {
      "accuracy": "96.4%",
      "fidScore": "12.4 (High Synthetic Quality)",
      "fps": "42.8 FPS",
      "latencyMs": "23.3 ms",
      "powerWatts": "12.5 W",
      "customMetric": {
        "label": "Zero-Shot Unseen Defect Recall",
        "value": "91.8%"
      }
    },
    "troubleshooting": [
      {
        "problem": "Diffusion 생성 모델 적용 시 200단계 이상의 Sampling Iteration으로 인해 실시간 라인 검사 속도가 저하됨 (장당 1.8초 소요).",
        "cause": "기존 Full Diffusion Pipeline의 과도한 Denoising Step 및 Latent Space 차원 과대.",
        "solution": "DDIM 15-step Fast Sampling Algorithm 및 Knowledge Distillation 기법을 적용하여 FID 점수 손실 없이 추론 시간을 장당 0.12초로 15배 단축시킴."
      },
      {
        "problem": "CLIP 모델이 웨이퍼의 미세한 Scratch 패턴과 Random Pattern의 공간적 특성을 구분하지 못하는 오류 발생.",
        "cause": "자연어 기반 일반 CLIP Text Prompt가 반도체 Die Grid의 공간 토폴로지(Spatial Topology) 정보 반영 부족.",
        "solution": "Die Coordinate Spatial Encoding Layer를 CLIP Vision Encoder output에 결합하고, 반도체 도메인 특화 Prompt Template ('A wafer map with a continuous diagonal scratch line defect')을 커스텀 설계하여 Spatial Accuracy 14.2%p 상승."
      }
    ],
    "githubUrl": "https://github.com/jiho-hwang-tec/WaferCLIP",
    "pdfReportUrl": "https://www.image2url.com/r2/default/documents/1788186552460-e8bb7e65-bf75-46b5-ba5f-bd6f112287b9.pdf",
    "videoUrl": "#",
    "sections": {
      "overview": {
        "title": "문제 정의 및 연구 개요",
        "content": "** 문제 정의 **\nWM811K 데이터셋은 정상 웨이퍼가 약 **85%**를 차지해 희귀 결함 클래스 학습이 어려운 심한 클래스 불균형 문제가 있다. 이를 해결하기 위해 정상 웨이퍼맵과 텍스트 프롬프트를 입력하면 원하는 결함 패턴을 생성하는 WaferCLIP을 개발했다.\n\n**Dataset - WM811K**\nWM811K는 반도체 제조 공정에서 수집된 대규모 웨이퍼맵 결함 데이터셋으로, 각 웨이퍼에서 불량 다이(Die)가 어떤 공간적 패턴으로 분포하는지를 이미지 형태로 표현한다.\n전체 wafermap : 811,457장\n라벨링된 데이터: 172,950장\nclass: 8개 defect class + 정상(None)\nNone data 비율: 약 85%\nimage 전처리: 모든 이미지를 64×64 크기로 통일\n\n **연구 개요** \n정상 웨이퍼\n→ e4e로 W+ latent space 변환\n→ CLIP으로 텍스트와 이미지 의미 비교\n→ latent space optimization\n→ StyleGAN2로 defect wafemap image 생성\n→합성 image를 검사 모델 학습에 활용\n\n[image:0]\n",
        "imageUrl": "",
        "subtitles": [
          "반도체 제조 라인에서 수집되는 Wafermap 결함 데이터의 극심한 클래스 불균형(Class Imbalance) 및 Unseen Defect 문제 해결을 위한 융합 엔지니어링 프레임워크입니다. 경량화된 Diffusion 생성 모델로 불균형 결함 패턴을 합성 및 증강하고, Fine-tuned CLIP 멀티모달 프레임워크를 적용하여 레이블이 없는 새로운 결함까지 높은 정확도로 분류합니다.",
          ""
        ],
        "images": [
          {
            "id": "0.3403963952054716",
            "url": "https://cdn.phototourl.com/free/2026-08-31-28d6e673-4d39-4d42-a948-2b826beb4b2d.png",
            "imageSize": "lg",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ]
      },
      "architecture": {
        "title": "연구 내용",
        "content": "**1. StyleGAN2 경량화**\n[image:0]\n- 1024×1024 RGB → 64×64 Grayscale\n- Output Channel 3 → 1\n- Network Depth와 Feature Size 축소\n\n **2. e4e 경량화** \n고해상도 자연 이미지용 e4e를 64×64 웨이퍼맵에 맞게 수정했다.\n- ResNet50 → ResNet34 기반 경량 구조\n- SE Module 제거\n- 1024×1024 → 64×64\n- Style Vector 18 → 10 \n\n**3. CLIP domain fine-tuning**\nCLIP ViT-B/32 구조는 유지하고 90K 웨이퍼 이미지-텍스트 쌍으로 파인튜닝해 결함 이미지와 설명 간 의미적 관계를 학습했다.\n\n**4. Text-based defect image 생성**\nCLIP Loss로 생성 이미지가 목표 텍스트와 가까워지도록 W+ latent를 수정하고, L2 Loss를 함께 적용해 원본 웨이퍼 구조가 지나치게 변형되지 않도록 했다.\n\n [blue]전체 loss 함수[/blue] \n[image:1]\n\n [blue]CLIP loss[/blue] \n[image:2]\n생성된 wafermap과 목표 text의 코사인 유사도를 높이는 방향으로 latent를 optimization한다.\n\n [blue]latent loss[/blue] \n[image:3]\noptimization된 latent가 초기 latent에서 지나치게 멀어지는 것을 방지하여 원본 wafermap image의 전체 구조를 유지한다.",
        "imageUrl": "",
        "images": [
          {
            "id": "0.07806092397277886",
            "url": "https://cdn.phototourl.com/free/2026-08-31-e8d01744-e7ba-4702-8b29-0f43344c2437.png",
            "imageSize": "lg",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.37263140078252077",
            "url": "https://i.ibb.co/GQMQzLfR/2026-08-23-3-10-06.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.855244224196521",
            "url": "https://cdn.phototourl.com/free/2026-08-31-fcec9053-48c5-42d7-88ba-bbdb268aab33.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.23338177897417012",
            "url": "https://cdn.phototourl.com/member/2026-08-31-8b542a28-4f4c-41a0-8a16-a9a3659c7a07.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ]
      },
      "hardware": {
        "title": "실험 및 검증",
        "content": "### 트러블슈팅 ① - 클래스별 생성 품질 저하\n**문제 발견**\nStyleGAN2 학습 초기에는 모든 클래스에 동일하게 10,000개의 학습 데이터를 사용했다.\n그러나 실험 결과 Loc, Edge-Loc, Scratch와 같이 구조적으로 복잡한 defect class의 생성 품질이 낮게 나타났다.\n\n**원인 분석**\n단순한 결함 패턴과 달리 해당 클래스는 위치나 형태의 다양성이 커서 10,000개의 학습 데이터만으로는 충분한 분포를 학습하지 못한다고 판단했다.\n\n**개선 및 결과** \n학습 데이터 구성을 클래스별로 조정했다.\n- Loc: 10K → 25K\n- Edge-Loc: 10K → 25K\n- Scratch: 10K → 40K\n[image:0]\nNone class wafermap을 input으로 하여 Loc, Edge-Loc, Edge-Ring, Random, Near-full 등의 defect class를 사전에 defect별 latent direction을 정의하지 않아도, 텍스트의 의미에 맞게 latent space가 변화하며 각 class의 특징을 갖는 wafermap을 생성할 수 있음을 확인했다.\n\n### 트러블슈팅 ② - Donut / Center 생성 실패\n**문제 발견**\nNone type wafermap에서 Donut과 Center wafermap image를 직접 생성했을 때 다른 class보다 원하는 defect 패턴이 정확하게 만들어지지 않았다.\n\n**원인 분석**\nLoc이나 Random의 wafermap 패턴은 새로운 defect texture를 추가하는 것만으로 어느 정도 생성이 가능하다. 반면 Donut과 Center는 [blue]정확한 위치 + 기하학적 형태[/blue]를 동시에 만족해야 한다. 따라서 아무 결함도 없는 정상 웨이퍼의 latent에서 해당 구조를 새롭게 생성하는 데 한계가 있었다.\n\n**문제 해결 - Self-editing 방식 도입** \nnone wafermap image를 input으로 사용하는 대신 실제 Donut 또는 Center wafermap image를 input으로 사용하고 동일한 class의 텍스트를 적용했다.\n기존 결함의 핵심 구조는 유지하면서 위치와 형태를 조금씩 변화시켜 새로운 학습 데이터를 생성하는 In-class Augmentation 방식을 적용했다.\n[image:1]\n\n### 실제 검사 모델 성능 검증\nWaferCLIP 합성 데이터를 기존 검사 모델에 추가한 결과:\n- Mean Teacher F1: 0.837 → 0.925\n- AE 기반 모델 F1: 0.897 → 0.944\n- Donut → Edge-Ring 오분류: 600 → 7\n[image:2]\n",
        "imageUrl": "",
        "images": [
          {
            "id": "0.8228631910822395",
            "url": "https://cdn.phototourl.com/member/2026-08-31-698e29b2-86bd-43ac-bc0c-fe5c634bff82.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.736662814133027",
            "url": "https://cdn.phototourl.com/member/2026-08-31-96a6cacc-bf79-480a-a4f2-bcdfb6ee5310.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.5680788602830039",
            "url": "https://cdn.phototourl.com/member/2026-08-31-5c27ecb4-719d-4ab7-8006-1d102ddf54f0.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ]
      },
      "firmware": {
        "title": "결론",
        "content": "WaferCLIP은 e4e와 StyleGAN2를 저해상도 웨이퍼맵에 맞게 경량화하고, CLIP을 웨이퍼 도메인에 파인튜닝한 텍스트 기반 결함 생성 프레임워크​다. \n\n**핵심 성과**\n- 도메인 최적화 : e4e / StyleGAN2를 저해상도 흑백 웨이퍼맵에 맞게 경량화\n- 멀티모달 학습 : CLIP을 웨이퍼 이미지-텍스트 데이터로 파인튜닝\n- 생성 방식 : CLIP 기반 잠재공간 최적화를 통한 텍스트 제어 결함 생성\n- 기존 inspection 모델의 성능 개선 : 여러 기존 검사 모델에서 F1-score와 클래스 분리 성능 향상을 확인",
        "imageUrl": ""
      }
    },
    "pdfReportLabel": "논문 PDF",
    "pdfDocuments": [
      {
        "id": "pdf-legacy",
        "title": "논문 PDF",
        "url": "https://www.image2url.com/r2/default/documents/1788186552460-e8bb7e65-bf75-46b5-ba5f-bd6f112287b9.pdf"
      }
    ]
  },
  {
    "id": "proj-autonomous-robot",
    "title": "Side Projects",
    "subtitle": "기존 모델 성능 개선 / 논문 구현",
    "category": "CV/ML",
    "featured": true,
    "tags": [
      "Python",
      "PyTorch",
      "numpy",
      "pandas",
      "CUDA",
      "OpenCV"
    ],
    "date": "",
    "thumbnail": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    "overview": "상위 AI 인지 컴퓨터(Jetson Orin Nano)와 하위 고속 실시간 모터 제어기(STM32F407)를 CAN Bus로 결합한 산업용 AMR 로봇입니다. 4층 Custom PCB 전원 및 모터 드라이버 회로를 직접 설계하고, YOLOv8 비전 인식 기반 실시간 장애물 회피 및 정확한 정차 알고리즘을 구축했습니다.",
    "purpose": "클린룸 내 정밀 장비 및 웨이퍼 카세트 이송을 위해 하드웨어 전원/모터 제어 단의 결함 없는 30ms 이내 실시간 반응속도와 AI 장애물 감지를 통합 검증.",
    "systemArchitecture": [
      "1. Stereo Camera & 2D LiDAR -> Jetson Orin Nano (Host)",
      "2. YOLOv8-Nano TensorRT Real-time Object & Signboard Detection",
      "3. Navigation Target Coordinate & Safety Speed Vector Generation",
      "4. CAN Bus Protocol (1Mbps) Data Packet Transmission to STM32 Controller",
      "5. STM32F407 FreeRTOS Main Loop -> PID Quadrature Encoder Velocity Control (500Hz)",
      "6. Dual BTS7960 Motor Driver -> High Torque DC Geared Motors"
    ],
    "circuitSchematics": {
      "pcbLayers": "4-Layer Stackup (Top Signal - GND Plane - 3.3V/5V Power Plane - Bottom Signal)",
      "keyComponents": [
        {
          "name": "STM32F407VGT6",
          "spec": "ARM Cortex-M4 @ 168MHz",
          "description": "주 모터 제어 및 센서 퓨전 MCU"
        },
        {
          "name": "BTS7960 H-Bridge",
          "spec": "43A High Current Motor Driver",
          "description": "정밀 PWM 모터 구동 모듈"
        },
        {
          "name": "LM2596S + AMS1117",
          "spec": "24V to 5V/3.3V Buck Regulator",
          "description": "전원 노이즈 필터링 및 전압 안정화"
        }
      ],
      "powerDesign": "24V 10Ah LiFePO4 Battery input, TVS Diode Surge Protection, Reverse Polarity Protection Logic"
    },
    "firmwareArchitecture": {
      "fsmDescription": "System State FSM: INIT -> CALIBRATION -> IDLE -> NAVIGATING -> OBSTACLE_EMERGENCY_STOP -> MANUAL_OVERRIDE",
      "rtosTasks": [
        {
          "name": "Task_CAN_RxTx",
          "priority": 4,
          "periodMs": 5,
          "role": "Jetson Orin 데이터 송수신 및 파싱"
        },
        {
          "name": "Task_PID_Control",
          "priority": 5,
          "periodMs": 2,
          "role": "500Hz 듀얼 모터 엔코더 PID 제어"
        },
        {
          "name": "Task_Safety_Monitor",
          "priority": 6,
          "periodMs": 1,
          "role": "초음파/Current Sensor 비상 정지 감시"
        }
      ],
      "interrupts": [
        "TIM2 Encoder Hardware Quadrature Interrupt",
        "CAN1 RX FIFO0 Interrupt",
        "USART1 Telemetry Debug"
      ]
    },
    "aiModelDetails": {
      "modelType": "YOLOv8-Nano Custom Trained for Industrial Obstacles & Traffic Signs",
      "dataset": "2,500 Images collected in Lab Test Environment + Roboflow Synthetic Augmentation",
      "trainingProcess": "PyTorch 100 Epochs, Transfer Learning from COCO, TensorRT FP16 Export",
      "quantization": "TensorRT FP16 Execution on Jetson Orin Nano Tensor Cores"
    },
    "metrics": {
      "accuracy": "98.2% Object Recall",
      "fps": "48.5 FPS",
      "latencyMs": "18.2 ms System Latency",
      "powerWatts": "18.4 W Average",
      "customMetric": {
        "label": "Emergency Braking Stopping Distance",
        "value": "< 4.2 cm at 1.2 m/s"
      }
    },
    "troubleshooting": [
      {
        "problem": "모터 급가속 시 MCU(STM32)에 Power Brown-out Reset(BOR) 현상이 발생하여 로봇 재부팅됨.",
        "cause": "DC 모터의 기동 전류(Inrush Current)로 인해 24V 메인 전압 딥(Voltage Dip)이 발생하고 3.3V LDO 입력을 하강시킴.",
        "solution": "전원단에 Bulk electrolytic Capacitor (2200uF) 추가, LDO 전단 스위칭 벅 림 추가 및 PCB Ground Plane 분리(Analog GND & Power GND)로 스파이크 노이즈 제거 완료."
      },
      {
        "problem": "CAN 통신 보드율(1Mbps) 설정 시 수신 패킷 버퍼 오버플로우로 데이터 탈락 발생.",
        "cause": "STM32 FreeRTOS 최상위 우선순위 타스크 작업 지연으로 CAN RX ISR 핸들링 소요시간 초과.",
        "solution": "CAN RX FIFO Hardware Filter 레지스터 구성 및 Circular Queue DMA 패킷 수신 구조로 변경하여 패킷 손실률 0% 달성."
      }
    ],
    "githubUrl": "",
    "pdfReportUrl": "",
    "videoUrl": "#",
    "sections": {
      "section-1788871952303": {
        "title": "ML 기반 제조 설비 Predictive Maintenance 및 희소 고장 유형 분석",
        "content": "### 1. 문제 정의\n제조 설비의 센서 데이터를 기반으로 고장 위험을 사전에 예측하는 최적의 Predictive Maintenance 모델 구축\n[blue]실제 고장을 최대한 놓치지 않으면서(False Negative 최소화), 불필요한 유지보수 경고도 과도하게 발생하지 않도록 Precision–Recall 균형을 맞추는 것[/blue]\n\n### 2. 데이터 분석\n**Dataset**\nAI4I020 제조 설비의 온도·RPM·토크·공구 마모 등의 상태 데이터를 이용해서 기계 고장을 사전에 예측하는 Predictive Maintenance용 합성 제조 데이터셋\n[image:0]\n\n< 데이터의 비고장/고장 비율 >\n**Class Imbalance**\n고장 데이터가 소수 클래스임을 확인하고, 단순 정확도보다 실제 고장을 탐지하는 Recall 중심의 평가 전략을 수립했다.\n**Failure Pattern Analysis**\n정상/고장 그룹을 비교한 결과, 고장 설비에서 토크와 공구 마모가 증가하고 회전속도가 감소하는 경향을 확인했다.\n[image:1]\n\n< Torque의 Box Plot>\n고장 설비의 토크 중앙값과 사분위 범위가 정상 설비보다 전반적으로 높은 수준을 보였다. 다만 고장 그룹에서는 매우 낮은 토크 값도 다수 관찰되어, 고장은 단순한 고토크 조건뿐 아니라 비정상적인 부하 상태 전반과 연관될 가능성이 있음을 확인했다.\n**Statistical Validation**\nWelch’s t-test와 Mann–Whitney U 검정을 통해 정상/고장 그룹 간 주요 센서 변수의 차이를 검증하고, 비정규·비대칭 분포를 고려해 통계적 해석을 보완했다.\n**Feature Engineering**\n원본 센서 데이터뿐 아니라 공정 특성을 반영한 Temperature Difference와 Mechanical Power를 파생 변수로 생성하여 고장 패턴을 추가로 분석했다.\n### 3. 모델 선정 및 Optimization\n**모델 성능 비교**\n[image:2]\n\n선형 모델부터 배깅/부스팅 기반 앙상블 모델까지 6개 알고리즘을 비교하고, 불균형 데이터 특성을 고려해 Recall과 F1 중심으로 최종 모델을 lightGBM으로 선정했다.\n** Grid search기반 Hyperparameter Optimization**\n-\tLightGBM의 주요 트리 구조 및 학습 파라미터를 대상으로 5-fold Grid Search를 수행하고, Precision/Recall/F1을 동시에 비교하여 최적 후보군을 탐색\n-\t제조 설비 고장 미탐 비용을 고려해 CV Recall 0.82 이상을 최소 조건으로 설정하고, 해당 조건을 만족하는 후보 중 F1이 가장 높은 Hyperparameter 조합을 최종 선택\n[image:3]\n\n< Precision-Recall trade-off 그래프 >\n**Threshold Optimization**\n선택된 Hyperparameter로 모델을 다시 학습한 뒤 Validation set에서 0.05 ~ 0.95 threshold를 탐색하고 Precision / Recall / F1 trade-off를 조정.\n**모델 테스트 결과**\n[image:4]\n\n< Confusion Matrix >\n최종 모델은 독립 Test set에서 **51건의 실제 고장 중 44건을 탐지하여 Recall 86.3%**를 달성했다. 동시에 정상 1,449건 중 오경보는 10건으로 제한하여, 높은 고장 탐지율과 낮은 False Positive 사이의 균형을 확보했다.\n### 4. SHAP 분석\n**고장 요인 분석 – SHAP Summary Plot**\n[image:5]\n\n< Summary Plot >\nSHAP 분석을 통해 모델의 주요 고장 판단 요인을 분석했다. Tool Wear가 가장 높은 영향도를 보였으며, 높은 공구 마모와 낮은 회전속도가 고장 확률 증가에 크게 기여하는 패턴을 확인했다. 또한 Mechanical Power와 Torque 역시 특정 운전 조건에서 높은 영향을 보였다.\n**False Nagative 사례 분석 – SHAP Force plot**\n[image:6]\n\n< Force Plot >\nSHAP Force Plot을 활용해 개별 설비 예측의 근거를 분석했다. 특정 사례에서 높은 Tool Wear와 Rotational Speed 등은 고장 예측을 증가시키는 방향으로 작용한 반면, 일부 공정 변수는 위험도를 낮추는 방향으로 기여하여 최종 예측이 형성되는 과정을 확인했다.\n[image:7]\n\n< FN 사례의 고장 유형 파악 >\nFalse Negative 6건을 분석한 결과, 대부분의 미탐 사례가 Tool Wear Failure(TWF)에 해당함을 확인했다.\n-> 이는 고장 라벨을 학습한 모델이 Torque,Rotational Speed,Mechanical Power 기반의 주요 고장 패턴은 잘 탐지했지만, Tool wear 중심의 TWF 패턴에는 상대적으로 취약함을 보여준다.\n\n### 5. 개선 시도 및 결론\nTWF유형에서 상대적으로 높은 미탐 발생-> 따라서 TWF 탐지 성능 개선을 위한 추가 실험을 진행\n** 방법1 – TWF 전용 보조 모델 사용**\n-\tFalse Negative가 TWF에 집중되는 문제를 개선하기 위해 TWF 전용 LightGBM 보조 모델을 추가하고 메인 모델과 OR 방식으로 결합하는 구조를 실험했다. \n-\tTWF 데이터 희소성으로 보조 모델 Recall이 0.20에 그쳐 해당 접근을 폐기하고 추가 feature engineering 방향으로 전환했다.\n**방법 2 – Tool wear 변수 관련 Feature Engineering **\n-\tTWF 미탐 개선을 위해 Tool Wear와 Torque, Mechanical Power, Rotational Speed 간의 interaction feature를 추가하고 LightGBM을 재튜닝했다. \n-\tTWF Recall이 기존 0.25에서 개선되지 않았다\n**실패 사례 분석**\n전체 data 10,000개 중 TWF가 46개에 불과한 극심한 class imbalance가 핵심 원인임을 확인했다.\n\n## 6. 결론\n- 제조 설비 데이터의 정상/고장 분포를 분석하고 통계 검정을 수행한 뒤, LightGBM 기반 예지보전 모델을 구축\n- Grid Search와 validation 기반 threshold 조정을 통해 Recall을 우선적으로 확보했고, test set에서 실제 고장 51건 중 44건을 탐지\n- SHAP과 False Negative 분석을 통해 미탐 6건이 모두 희소 TWF 유형에 집중되어 있음을 확인했으며, 전체 성능뿐 아니라 고장 유형별 모델 한계까지 분석\n\n",
        "imageUrl": "",
        "date": "2026.08",
        "githubUrl": "https://github.com/jiho-hwang-tec/manufacturing-predictive-maintenance",
        "tags": [
          "SHAP",
          "Manufacturing Predictive Maintenanc"
        ],
        "summary": "제조 설비 고장 탐지 문제를 데이터로 진단하고 모델 최적화 및 실패 패턴의 원인과 개선 우선순위까지 도출한 프로젝트",
        "images": [
          {
            "id": "0.20138109385602232",
            "url": "https://cdn.phototourl.com/member/2026-09-07-8c4c8ec8-8e93-45df-a779-bdf4f4be3a75.png",
            "imageSize": "sm",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.7662104240539922",
            "url": "https://cdn.phototourl.com/member/2026-09-07-826ecb93-05ce-44e7-9cf8-98271a281ec6.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.5103691769460669",
            "url": "https://cdn.phototourl.com/member/2026-09-07-de137a8b-c54e-4521-a0ce-f5ac2a8a2491.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.8908113311855129",
            "url": "https://cdn.phototourl.com/member/2026-09-07-e5302166-e16c-43e0-ae88-17803777cd40.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.4511229582596299",
            "url": "https://cdn.phototourl.com/member/2026-09-07-69e6c3de-2934-46e3-be58-9c0d90a6b742.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.11824840637720657",
            "url": "https://cdn.phototourl.com/member/2026-09-07-30179531-85ed-4535-9e38-e1eeec5df977.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.5111497696568001",
            "url": "https://cdn.phototourl.com/member/2026-09-07-dea1c98b-6819-4903-a94f-2a55d95ce49e.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.8417645097283258",
            "url": "https://cdn.phototourl.com/member/2026-09-07-59aad61f-c259-47be-a0ef-85a9483585af.png",
            "imageSize": "sm",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ]
      },
      "architecture": {
        "title": "CIFAR-10 classification Improvement",
        "content": " <span class=\"text-sm font-bold text-slate-900\">**Dataset** </span>  \n **CIFAR-10** \n- 32*32 RGB Imgaes\n- 10 classes\n- Train / Test split 기반 image classification\n[image:0]\n** 개발 환경 **\nGoogle Colab 기반 Python 개발 환경에서 PyTorch 모델 구현 및 학습\nColab GPU를 활용한 모델 학습 및 실험 수행\n <span class=\"text-sm font-bold text-slate-900\">**Baseline** </span>  \n- Initial Test Accuracy: 73%\n <span class=\"text-sm font-bold text-slate-900\">**Performance Improvement** </span>  \n73% → 86% → 90% → 92.06%\n <span class=\"text-sm font-bold text-slate-900\">**Key Contributions** </span>  \n- Data augmentation과 network architecture 개선을 통해 test accuracy를 73%에서 92.06%까지 향상\n- Train/Test accuracy 비교를 통해 overfitting을 식별하고 regularization 전략 적용\n- Dropout probability와 epoch 수를 실험적으로 조정하여 최적 training configuration 탐색\n- StepLR과 Cosine Annealing을 비교하고 더 빠른 convergence를 보인 Cosine Annealing 선택\n- TensorBoard를 활용하여 training loss, training accuracy, test accuracy를 추적하고 모델 성능을 비교\n[image:1]",
        "imageUrl": "",
        "tags": [
          "Image classification",
          "Model Optimization",
          "CNN"
        ],
        "summary": "CIFAR-10 이미지 분류 모델을 단계적으로 개선하며 data augmentation, network depth, optimizer, dropout, weight initialization, learning-rate scheduling의 영향을 실험하고 test accuracy를 73%에서 92.06%까지 향상시킨 프로젝트",
        "date": "2024.05 - 2024.07",
        "images": [
          {
            "id": "0.39598371928626264",
            "url": "https://cdn.phototourl.com/member/2026-08-31-e1238521-c0cc-4400-b171-7b0106994021.png",
            "imageSize": "sm",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.8127557903167232",
            "url": "https://cdn.phototourl.com/member/2026-08-31-41712f28-d96d-43d0-a8fc-fc21fb06b114.png",
            "imageSize": "lg",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ],
        "githubUrl": "https://github.com/jiho-hwang-tec/CIFAR-10-classification"
      },
      "section-1787123259936": {
        "title": "VDSR development ",
        "content": "### 1. 문제 정의 및 가설\n기존 VDSR은 저해상도 이미지를 고해상도로 복원할 때 전체적인 pixel difference를 줄이는 방향으로 학습되지만, 머리카락이나 윤곽선처럼 high-frequency component가 많은 edge 영역이 충분히 sharp하게 복원되지 않는 문제에 주목했다.\n**가설 설정**\n기존 VDSR Loss에 edge difference를 측정하는 High-Frequency Loss를 추가하면, 학습 과정에서 edge 영역을 더 강조하게 되고 Super-Resolution 성능이 향상될 것이다.\n\n### 2. 모델 개선\n기존 VDSR Loss에 High-Frequency Filter를 이용한 Edge Loss를 추가했다.\n[image:0]\nL_edge는 Super-Resolved Image와 Ground Truth Image에 edge filter를 적용한 뒤, 두 edge map의 차이를 계산하도록 구성했다. \n\n### 3. 실험 및 Troubleshooting\n**실험 1 - Laplacian Filter**\n먼저 기본적인 edge detection 방법인 Laplacian Filter를 적용\n-> visual quality 개선X, PSNR에서도 유의미한 향상X\n-> 단순히 Edge Loss를 추가하는 것보다 어떤 edge detector를 사용하는지가 중요하다고 판단하며 여러 Edge Loss를 추가해보며 실험해야겠다는 판단\n\n**실험 2 - Scharr Filter**\n두 번째로 x/y 방향 gradient를 이용하는 Scharr Filter를 적용\n-> Laplacian과 edge map을 직접 비교한 결과 Scharr Filter가 edge를 더 명확하게 detect하는 것을 확인했고, 기존 VDSR Loss와 Edge Loss의 scale을 고려해 최적의 weight λ 를 설정한 뒤 다시 학습했다.\n [blue]Laplacian 기반 실험에서 성능 향상이 제한적인 원인을 edge detection 성능으로 분석하고, Scharr Filter와 loss weight 조정을 통해 모델을 개선[/blue] \n\n### 4. 결과\nScharr 기반 High-Frequency Loss를 적용한 모델은 기존 VDSR보다 Ground Truth와의 difference 감소,  머리카락과 같은 edge 영역이 더 sharp하게 복원, PSNR 소폭 향상\n[image:1]\n\n[image:2]\n",
        "imageUrl": "",
        "tags": [
          "Super-Resolution",
          "CNN",
          "Model-development"
        ],
        "date": "2024.06 - 2024. 07",
        "summary": "VDSR 기반 Super-Resolution 모델에 edge 정보를 반영하는 High-Frequency Loss를 추가하고, Laplacian과 Scharr Filter를 비교해 edge restoration 성능을 개선한 프로젝트",
        "images": [
          {
            "id": "0.1175086999787801",
            "url": "https://cdn.phototourl.com/member/2026-08-31-ac8a1b15-9a61-4660-8d37-6df77780b9f9.png",
            "imageSize": "lg",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.9602356774650558",
            "url": "https://cdn.phototourl.com/member/2026-08-31-40fa9d8a-921b-4b37-89df-091b66bcba31.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.47035125753968177",
            "url": "https://cdn.phototourl.com/member/2026-08-31-99cecebb-0a5f-47ef-a877-c16903742fc5.png",
            "imageSize": "lg",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ]
      },
      "section-1787125226843": {
        "title": "CUT model reproduction",
        "content": "### 1. 프로젝트 개요\nCityscapes 데이터를 trainA / trainB / testA / testB 형태의 unpaired dataset으로 구성하고, CycleGAN 계열 Generator/Discriminator 구조에 CUT의 PatchNCE Loss와 Feature Sampling Network(netF)를 결합한 Image-to-Image Translation 모델을 직접 구현\n\n### 2. 주요 구현\n** 개발환경**\n- Linux GPU 원격 서버에 SSH로 접속해 모델 개발 및 학습 수행\n- Conda 기반 Python 가상환경 및 CUDA GPU 학습 환경 구성\n- Byobu/Tmux를 활용해 장시간 학습 세션 유지 및 모니터링\n\n**구현**\n- PyTorch 기반 Custom Dataset / DataLoader 구현\n- Command-line 기반 Hyperparameter Configuration\n- ResNet 계열 Generator + Instance Normalization\n- Patch-level Feature Sampling을 위한 netF\n- Positive/Negative Patch Similarity 기반 PatchNCE Loss\n- Train/Test preprocessing pipeline 및 FID 평가 구성\n\n### 3. 트러블슈팅\n** 메모리 부족으로 Process가 Killed되는 문제**\n처음에는 Dataset initialization 시 모든 이미지를 RAM에 미리 로드해 Cityscapes 규모가 커지면서 메모리 부족이 발생했다.\n→ 전체 이미지를 preload하지 않고, getitem__() 호출 시 필요한 이미지만 disk에서 Lazy Loading하도록 Dataset 구조를 수정해 해결\n\n**PatchNCE Loss 학습 불안정**\nNCE Loss에서 NaN이 발생하고 값이 정상적으로 변화하지 않는 문제를 분석했다.\n→ Feature similarity와 tensor dimension을 점검하고 Positive/Negative cosine similarity 기반 NCE 계산을 수정.\n\n**200 Epoch 이후에도 학습이 제대로 진행되지 않는 문제**\n처음에는 Replay Buffer, Discriminator Weight, Network Depth 등을 의심했지만 최종적으로 netF가 optimizer에 포함되지 않아 Feature Sampling Network가 학습되지 않고 있음을 발견\n-> 초기 random feature를 계속 사용하면서 PatchNCE 학습 자체가 제대로 이루어지지 않았던 문제를 찾아냈다.\n\n### 4. 결과 \n**학습된 이미지**\n",
        "imageUrl": "",
        "date": "2024.07",
        "tags": [
          "Image-to-Image Translation",
          "Contrastive Learning",
          "GAN"
        ],
        "summary": "CUT논문을 기반으로 Cityscapes Unpaired Image Translation 모델을 PyTorch로 구현하고, PatchNCE 기반 Contrastive Learning 및 학습 과정의 메모리·Loss·Feature Sampling 문제를 직접 분석·개선한 프로젝트",
        "images": [
          {
            "id": "0.8203723253070679",
            "url": "https://cdn.phototourl.com/member/2026-08-31-960fc3ce-0930-4739-83ff-4280768624fd.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ],
        "githubUrl": "https://github.com/jiho-hwang-tec/CUT"
      }
    },
    "pdfDocuments": [],
    "pdfReportLabel": "PDF 보고서"
  },
  {
    "id": "proj-1787043638777",
    "title": "Other Projects - Embedded & Hardware Systems",
    "subtitle": "학부 전공 / 프로젝트 설명",
    "category": "etc.",
    "tags": [
      "CAD",
      "verilog",
      "Circuit Design",
      "PCB design"
    ],
    "featured": false,
    "date": "",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "sections": {
      "overview": {
        "title": "Project 1. PPG 센서 제작",
        "content": "### 1. 프로젝트 개요\nLED와 Photodiode를 이용한 Reflection-mode PPG 센서를 설계하고, Transimpedance Amplifier와 2단 증폭·필터 회로를 구성해 미세한 혈류 신호를 측정\n\n### 2. 설계 및 구현\n- HPF/LPF 기반 노이즈 제거 회로 설계\n- 전체 증폭도 2,652배 → 3,351배로 개선\n- PCB 설계·제작 및 측정용 Output Pin 추가\n- 피부 접촉을 고려한 3D Printed Case 설계\n[image:0]\n\n### 3. 트러블슈팅\n초기에는 회로 자체는 동작했지만 손가락에서 생체신호보다 노이즈가 크게 측정되는 문제\n\n**해결 방법**\n- LED 저항 1kΩ → 330Ω → 광량 증가\n- Transimpedance 저항 10kΩ → 75kΩ → 신호 크기 증가\n- Cut-off Frequency 재조정 → 노이즈 감소\n- LED–Photodiode 간격 3.5mm → 1mm → 반사광 수신 개선을 적용했고, 이후 실제 심박 신호 측정에 성공\n\n### 4. 결과\n최종 PCB에서 손끝 PPG 신호 측정에 성공했고, 손목에서도 특정 위치에서 측정 가능함을 확인\n[image:1]\n[image:2]\n",
        "imageUrl": "",
        "tags": [
          "CAD",
          "Embedded System",
          "PCB design",
          "Hardware Prototyping"
        ],
        "summary": "광학식 PPG 원리를 기반으로 심박 생체신호를 측정하는 센서를 회로 설계부터 PCB·3D 케이스 제작까지 구현하고, 노이즈와 광학 배치 문제를 반복적으로 개선해 실제 손끝·손목 신호 측정까지 검증한 프로젝트",
        "images": [
          {
            "id": "0.4189637641671188",
            "url": "https://i.ibb.co/SDqH85rr/2026-08-31-10-44-42.png",
            "imageSize": "sm",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.9506710135536534",
            "url": "https://i.ibb.co/zWxbD258/2026-08-31-6-45-13.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.8194143662835289",
            "url": "https://i.ibb.co/6c8c5L2N/2026-08-31-6-45-26.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ]
      },
      "architecture": {
        "title": "Project 2.  FPGA project",
        "content": "### 1. 프로젝트 개요\nFPGA 보드에서 동작하는 디지털 시계를 RTL 모듈 기반으로 설계하고, 시뮬레이션 검증 후 실제 하드웨어에서 동작을 확인했다.\n\n### 2. 주요 구현 내용\n**개발환경**\n- Intel Quartus Prime · QuestaSim · Verilog/SystemVerilog\n- FPGA 설계, 합성 및 시뮬레이션 기반 검증\n\n### 3. 주요 구현\n- NCO 기반 Clock Division으로 고주파 FPGA Clock을 1Hz 신호로 변환\n- Counter와 Controller를 이용해 시·분·초, 시간 설정, Alarm, Timer 기능 구현\n- Decoder 및 LED Controller를 이용한 7-Segment Display 출력\n- Slow Clock + D Flip-Flop 기반 Switch Debouncing 구현\n- Testbench와 Waveform Simulation으로 rollover 및 제어 신호 검증 후 FPGA 보드에서 통합 테스트\n### 4. 핵심 성과\nClock Division, Counter, Display Decoder, Controller, Alarm 등을 독립적인 RTL module로 설계하고, Simulation 기반 검증 후 FPGA hardware에 통합한 Digital System Design 경험\n",
        "imageUrl": "",
        "summary": "Verilog 기반으로 Clock, Counter, Controller, Alarm, 7-Segment Display 모듈을 설계하고 FPGA에서 동작을 검증한 디지털 시계 프로젝트",
        "tags": [
          "FPGA",
          "Digital Clock"
        ]
      },
      "hardware": {
        "title": "Project 3. Arduino project - 시각 장애인을 위한 전자 점자 영어 학습기기 제작",
        "content": "### 1. 프로젝트 개요\n기존 점자책이나 점자판은 휴대성과 반복 학습 측면에서 제약이 있어, 촉각 점자 출력 + 음성 안내 + 랜덤 단어 학습을 하나의 기기로 통합하는 것을 목표.\n\n**핵심 기능**\n- 6점 전자 점자 출력\n- 단어 뜻·발음 음성 재생\n- 단어 데이터셋 랜덤 비복원 추출\n- 버튼을 통한 반복/다음 단어 제어\n\n### 2. 설계 및 구현\n- Arduino UNO 기반 제어\n- 6개 Servo Motor + Spring Cylinder로 점자 돌출 구현\n- 회전 운동을 직선 운동으로 바꾸는 Cam 구조 적용\n- SD Card + DFPlayer + Speaker로 음성 출력\n- Fusion 360 기반 3D 케이스 설계 및 출력\n [blue]최종적으로 영어 단어가 선택되면 뜻과 발음이 음성으로 나오고, 알파벳 점자가 한 글자씩 순차적으로 돌출되도록 구현.[/blue] \n\n### 3. 트러블슈팅\n**문제1**\n초기에는 6개의 Linear Solenoid를 사용\n-> 높은 발열, 예상보다 큰 소비전류, 6개 동시 구동 불안정 문제 발생, 실제 측정에서도 사양 3mA보다 높은 약 6mA가 흐르는 것을 확인. \n**해결 방법**\n동작부를 Solenoid에서 Servo Motor로 변경, Servo의 회전 운동을 Cam 구조를 이용해 직선 운동으로 변환. 변경 후 6개 Servo의 동시 동작을 확인했다.\n\n**문제 2**\n추가로 일부 Servo만 동작하는 문제\n**해결 방법**\n회로 점검을 통해 Arduino와 외부 전원의 GND 미공유와 전류 공급 부족을 원인으로파악, GND를 공통 연결하고 전류 한계를 1~1.5A 수준으로 조정해 해결\n[image:1]\n\n### 4. 결과\n랜덤 영어 단어 선택, 뜻·발음 음성 출력, 해당 알파벳 점자의 순차적 돌출, 현재 단어 반복 / 다음 단어 이동 기능을 모두 구현\n**최종 프로토타입 설계도**\n[image:0]\n**최종 프로토타입 및 동작 이미지**\n[image:2]\n**핵심 성과**\n전력·발열 문제로 실패한 초기 Solenoid 설계를 Servo + Cam 구조로 재설계하고, 전원·GND 문제까지 단계적으로 분석해 6점 전자 점자 장치를 완성한 하드웨어 시스템 통합 경험\n",
        "imageUrl": "",
        "date": "2023.09 - 2023.12",
        "tags": [
          "Embedded Systems",
          "Hardware Prototyping"
        ],
        "summary": "시각장애인의 영어 학습을 지원하기 위한 음성 출력과 6-dot를 결합한 Arduino 기반 학습기 프로토타입 제작 프로젝트",
        "images": [
          {
            "id": "0.27616313143830007",
            "url": "https://i.ibb.co/4g2cXV2r/2026-08-31-6-45-55.png",
            "imageSize": "lg",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.5523236864234494",
            "url": "https://i.ibb.co/Q38HgPDS/2026-08-31-10-53-04.png",
            "imageSize": "md",
            "imageAlign": "left",
            "imagePosition": "bottom"
          },
          {
            "id": "0.029982370803851244",
            "url": "https://i.ibb.co/tPYdJVRp/2026-08-31-10-57-45.png",
            "imageSize": "lg",
            "imageAlign": "left",
            "imagePosition": "bottom"
          }
        ]
      }
    },
    "githubUrl": "",
    "pdfReportUrl": ""
  }
];

export const initialResearch: ResearchItem[] = [
  {
    "id": "res-wafermap-cv",
    "title": "Generative AI Data Augmentation & Multi-modal CLIP Framework for Semiconductor Wafer Pattern Defect Diagnosis",
    "period": "2025.03 - 2026.02 (1년 학부연구생)",
    "advisor": "전자공학과 컴퓨터비전 & 반도체 AI 연구실 지도교수",
    "labName": "Computer Vision & Semiconductor AI Laboratory",
    "tags": [
      "Undergraduate Researcher",
      "Wafermap Defect",
      "Generative AI",
      "CLIP",
      "Model Quantization",
      "Semiconductor Yield"
    ],
    "summary": "반도체 제조 공정의 수율 제고를 목적으로, 극소수 결함 데이터 수집 한계를 극복하는 경량 Diffusion 기반 Wafermap 생성 알고리즘 및 CLIP Zero-Shot 결함 분류 프레임워크 연구를 1년 동안 수행함.",
    "objective": "WM-811K 등 웨이퍼맵 데이터셋의 90% 이상을 차지하는 None(정상) 데이터 대비 부족한 Center, Donut, Scratch 등 Rare Defect 데이터를 물리적 특성에 맞게 합성 증강하고, 레이블이 지정되지 않은 새로운 형태의 결함까지 인식할 수 있는 Zero-Shot 분류 프레임워크 구축.",
    "methodology": "1. WM-811K Dataset 전처리 및 Die Map Matrix 변환\n2. Light-weight Latent Diffusion Generator 구축 및 Fast DDIM Sampling 적용\n3. CLIP Text-Image Multi-modal Space 매핑 및 Prompt Engineering\n4. Spatial Die Map Coordinate Attention Module 추가\n5. TensorRT INT8 양자화를 통한 에지 단말기 배포 가능성 실증",
    "keyFindings": [
      "생성된 Wafermap 데이터 증강 시 Classifier F1-Score가 81.2%에서 95.8%로 상승함",
      "CLIP 기반 Zero-Shot 인식을 통해 학습에 포함되지 않은 Complex Multi-Defect 패턴에 대해서도 91.8% Recall 달성",
      "TensorRT 양자화 후에도 Accuracy 손실은 0.6%p에 불과하며 추론 속도는 4.2배 향상됨"
    ],
    "metrics": [
      {
        "label": "FID Score",
        "value": "12.4",
        "detail": "높은 생성 웨이퍼맵 화질 및 패턴 유사도"
      },
      {
        "label": "Classification Accuracy",
        "value": "96.4%",
        "detail": "8가지 핵심 Defect 패턴 기준"
      },
      {
        "label": "Inference Latency",
        "value": "23.3ms",
        "detail": "Jetson Orin Nano TensorRT INT8"
      },
      {
        "label": "Zero-Shot Recall",
        "value": "91.8%",
        "detail": "Unseen Novel Defect Pattern"
      }
    ],
    "paperTitle": "A Lightweight Multi-modal CLIP Framework with Generative Augmentation for Semiconductor Wafermap Defect Classification",
    "publication": "한국정보과학회 / IEEE AI-HW Joint Workshop Presentation Candidate",
    "pdfUrl": "#",
    "posterUrl": "#"
  },
  {
    "id": "res-fpga-signal",
    "title": "FPGA-Accelerated Real-Time Signal Integrity Testing & Logic Analyzer Co-Design",
    "period": "2024.09 - 2025.01",
    "advisor": "임베디드 하드웨어 시스템 연구실",
    "labName": "Embedded Hardware & System Research Lab",
    "tags": [
      "FPGA",
      "Verilog",
      "Signal Integrity",
      "Logic Analyzer",
      "FSM Debugging"
    ],
    "summary": "고속 디지털 회로 설계 시 발생하는 Metastability, Clock Skew, Glitch 현상을 실시간 모니터링하기 위한 FPGA 기반 로직 애널라이저 IP 코어 설계 및 신호 무결성 검증 연구.",
    "objective": "외부 비싼 계측기 없이 FPGA 내부 로직 신호를 200MHz 샘플링 속도로 트랩하여 AXI 버스로 호스트 PC에 전달하는 Embedded Analyzer 구축.",
    "methodology": "1. Dual-Port Block RAM Ring Buffer 기반 샘플링 하드웨어 코어 설계\n2. Verilog Configurable Trigger Logic (Edge/Pattern Trigger)\n3. Python GUI 수신 소프트웨어 개발 및 타이밍 다이어그램 시각화",
    "keyFindings": [
      "Vivado ILA 대비 BRAM 사용량을 40% 절감하면서 동일한 Trigger 성능 확보",
      "UART/SPI 통신 글리치 발생 순간을 5ns 분해능으로 정확히 capture"
    ],
    "metrics": [
      {
        "label": "Sampling Clock",
        "value": "200 MHz",
        "detail": "5ns Time Resolution"
      },
      {
        "label": "Trigger Jitter",
        "value": "< 2.1 ns",
        "detail": "Hardware Real-Time Trap"
      }
    ],
    "paperTitle": "FPGA Embedded Logic Analyzer IP Design for High-Speed Bus Debugging",
    "publication": "학부생 창의연구 학술대회 장려상",
    "pdfUrl": "#"
  }
];

export const initialGallery: GalleryItem[] = [
  {
    "id": "gal-wafermap-gen",
    "title": "Synthetic vs Real Semiconductor Wafermap Pattern Comparison Grid",
    "category": "AI & Wafermap",
    "date": "2025.11",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "description": "WM-811K 실제 반도체 FAB 웨이퍼맵(좌측)과 경량 Diffusion 모델로 생성된 가상 웨이퍼맵(우측) 비교. Center, Donut, Scratch 패턴의 Die 불량 분포가 정밀하게 모사됨.",
    "technicalSpecs": "Resolution: 52x52 Die Grid, Model: Latent Diffusion + DDIM 15-step, FID: 12.4",
    "toolsUsed": [
      "PyTorch",
      "WM-811K Dataset",
      "Matplotlib",
      "OpenCV"
    ]
  },
  {
    "id": "gal-pcb-top",
    "title": "STM32F407 4-Layer AMR Main Control Custom PCB Layout",
    "category": "PCB & Circuit",
    "date": "2025.08",
    "image": "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
    "description": "JLCPCB에서 제조된 4층 Custom PCB 탑 레이어. STM32 MCU 주변의 Decoupling Capacitor배치 및 CAN Transceiver 차동 배선(Differential Pair) 임피던스 매칭 구현.",
    "technicalSpecs": "4-Layer FR4 1.6mm, 1oz Copper, Controlled Impedance 120 ohm for CAN",
    "toolsUsed": [
      "KiCad 8.0",
      "JLCPCB SMT",
      "LTspice"
    ]
  },
  {
    "id": "gal-fpga-ila",
    "title": "Vivado Logic Analyzer (ILA) FPGA FSM State Transition Capture",
    "category": "FPGA & Hardware",
    "date": "2025.05",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "description": "100MHz 시스템 클록 환경에서 Verilog AXI4-Lite Slave FSM 상태 전환 순간 및 Handshake 신호(s_axi_arvalid & s_axi_arready) 파형 캡처 화면.",
    "technicalSpecs": "Sampling Clock: 100MHz, Probe Depth: 4096 samples, Timing Slack: +0.32ns",
    "toolsUsed": [
      "Xilinx Vivado 2023.2",
      "Artix-7 FPGA",
      "Verilog HDL"
    ]
  },
  {
    "id": "gal-oscilloscope",
    "title": "Keysight Oscilloscope Power Rail Voltage Ripple & Switching Noise Test",
    "category": "Lab Environment",
    "date": "2025.02",
    "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    "description": "3.3V LDO 전원단의 스위칭 노이즈 및 리플 전압 오실로스코프 측정. Pi-Filter 설계 후 11.8mVpp로 안정적인 노이즈 억제 확인.",
    "technicalSpecs": "Oscilloscope: Keysight InfiniiVision 200MHz, AC Coupling Mode, 20MHz Bandwidth Limit",
    "toolsUsed": [
      "Keysight Oscilloscope",
      "Digital Multimeter",
      "Soldering Station"
    ]
  }
];

export const initialPapers: PaperItem[] = [];

export const initialBlogPosts: BlogPost[] = [
  {
    "id": "blog-wafermap-clip",
    "title": "Semiconductor Wafermap Defect Classification using CLIP & Light-Weight Generative AI",
    "date": "2026.01.15",
    "category": "AI & Semiconductor",
    "readTime": "8 min read",
    "summary": "WM-811K 반도체 웨이퍼맵 데이터의 클래스 불균형 문제를 해결하기 위해 Latent Diffusion으로 데이터셋을 생성하고, CLIP Zero-Shot 프레임워크를 반도체 도메인에 적용한 연구 일지입니다.",
    "tags": [
      "Wafermap",
      "CLIP",
      "Diffusion",
      "PyTorch",
      "TensorRT",
      "Undergraduate Research"
    ],
    "content": "### 1. 반도체 FAB 웨이퍼맵(Wafermap) 결함 분석의 도전 과제\n\n반도체 제조 공정(Fabrication)에서 웨이퍼 한 장에는 수천 개의 Die(칩)가 위치합니다. 테스트 공정(EDS)을 거치면 불량 칩의 위치에 따라 **Center, Donut, Scratch, Edge-Ring** 등의 독특한 결함 패턴(Defect Pattern)이 생성됩니다.\n\n문제는 다음과 같습니다:\n1. **극심한 데이터 불균형 (Class Imbalance)**: 정상(None) 데이터가 전체의 90% 이상이며, Scratch나 Edge-Loc 같은 치명적 결함은 데이터가 매우 적습니다.\n2. **미지의 결함 (Unseen Defects)**: 공정이 변경되면 기존 학습 데이터에 없던 새로운 형태의 Defect가 발생합니다.\n\n---\n\n### 2. 해결책: Generative Diffusion + CLIP Zero-Shot\n\n이 문제를 해결하기 위해 1년간의 학부연구생 기간 동안 다음과 같은 2-Step Architecture를 구축했습니다.\n\n#### (1) Light-weight Diffusion Generator\n- WM-811K의 희귀 Defect Die Matrix를 Latent Space에 매핑\n- Fast DDIM 15-step Sampling으로 FID 12.4 수준의 고화질 가상 Wafermap 생성 및 데이터 증강\n\n#### (2) CLIP Multi-Modal Prompt Tuning\n- Vision Transformer Backbone + Custom Spatial Die Coordinate Attention\n- Prompt Template: *\"A semiconductor wafermap showing a [CLASS] defect pattern\"*\n\n---\n\n### 3. TensorRT 양자화 및 에지 배포 결과\n\nJetson Orin Nano 단말기 배포를 위해 PyTorch 모델을 ONNX를 거쳐 **TensorRT INT8** 레진으로 변환했습니다.\n\n- **FP32 Memory**: 4.2 GB -> **INT8 Memory**: 1.1 GB (73.8% 감축)\n- **Latency**: 98.4ms -> **23.3ms** (4.2배 단속)\n- **Accuracy**: 97.0% -> **96.4%** (단 0.6%p 손실)",
    "codeSnippet": {
      "language": "python",
      "filename": "wafermap_clip_pipeline.py",
      "code": "import torch\nimport clip\nfrom PIL import Image\n\ndevice = \"cuda\" if torch.cuda.is_available() else \"cpu\"\nmodel, preprocess = clip.load(\"ViT-B/16\", device=device)\n\n# Semiconductor Wafermap Defect Prompts\ndefect_classes = [\n    \"a wafermap with center defect pattern\",\n    \"a wafermap with donut shape defect ring\",\n    \"a wafermap with edge-ring defect\",\n    \"a wafermap with scratch line defect\",\n    \"a normal wafermap with no defects\"\n]\n\ntext_inputs = torch.cat([clip.tokenize(prompt) for prompt in defect_classes]).to(device)\n\ndef classify_wafermap(wafer_img_tensor):\n    with torch.no_grad():\n        image_features = model.encode_image(wafer_img_tensor)\n        text_features = model.encode_text(text_inputs)\n        \n        # Normalized Cosine Similarity\n        image_features /= image_features.norm(dim=-1, keepdim=True)\n        text_features /= text_features.norm(dim=-1, keepdim=True)\n        \n        similarity = (100.0 * image_features @ text_features.T).softmax(dim=-1)\n        return similarity"
    }
  },
  {
    "id": "blog-fpga-fsm-debug",
    "title": "FPGA Verilog FSM & AXI4 Protocol Debugging with Vivado Logic Analyzer (ILA)",
    "date": "2025.10.20",
    "category": "FPGA & Hardware",
    "readTime": "6 min read",
    "summary": "Xilinx Artix-7 FPGA 환경에서 Verilog AXI4-Lite Slave FSM을 구현할 때 발생할 수 있는 Timing Slack Violation 및 Bus Hanging 현상을 Vivado ILA 코어로 추적하고 해결한 경험을 공유합니다.",
    "tags": [
      "FPGA",
      "Verilog",
      "Vivado",
      "ILA",
      "AXI4-Lite",
      "FSM"
    ],
    "content": "### FPGA FSM 디버깅의 중요성\n\n하드웨어 신호 처리는 소프트웨어와 달리 순차 실행이 아닌 **동시적(Concurrent) 파이프라인**으로 작동합니다. AXI4 버스 통신의 경우 single clock cycle에서 Handshake 신호 mismatch가 발생하면 버스가 영구 대기 상태(Bus Hanging)에 빠질 수 있습니다.\n\n---\n\n### 주요 이슈: Negative Setup Slack (-0.45ns)\n\nVivado Implementation 완료 후 Timing Summary에서 Setup Slack이 음수로 계산되어 100MHz 클록 주기를 만족하지 못했습니다.\n\n#### 원인 분석\nDDS Phase Accumulator 연산 후 Lookup Table 메모리 탐색 및 Mux 연산 경로가 단일 Clock Cycle에 나열되어 Combinational Delay가 9.8ns에 달함.\n\n#### 해결 기법: 2-Stage Pipelining\n```verilog\n// Before: Combinational Direct Path\nassign wave_out = dac_lut[phase_accumulator[31:20]];\n\n// After: 2-Stage Pipelined Register Path\nalways @(posedge clk) begin\n    if (rst) begin\n        lut_addr <= 12'd0;\n        wave_out <= 12'd0;\n    end else begin\n        lut_addr <= phase_accumulator[31:20]; // Stage 1\n        wave_out <= dac_lut[lut_addr];          // Stage 2\n    end\nend\n```\n\n결과적으로 Setup Slack이 **+0.32ns**로 전환되어 100MHz 동작 안정성을 완벽히 확보했습니다.",
    "codeSnippet": {
      "language": "verilog",
      "filename": "axi_lite_fsm.v",
      "code": "// AXI4-Lite Read FSM State Machine\nlocalparam IDLE  = 2'b00;\nlocalparam READ  = 2'b01;\nlocalparam WAIT  = 2'b10;\n\nalways @(posedge S_AXI_ACLK) begin\n    if (!S_AXI_ARESETN) begin\n        state <= IDLE;\n        S_AXI_ARREADY <= 1'b0;\n        S_AXI_RVALID  <= 1'b0;\n    end else begin\n        case (state)\n            IDLE: begin\n                if (S_AXI_ARVALID) begin\n                    S_AXI_ARREADY <= 1'b1;\n                    state <= READ;\n                end\n            end\n            READ: begin\n                S_AXI_ARREADY <= 1'b0;\n                S_AXI_RVALID  <= 1'b1;\n                state <= WAIT;\n            end\n            WAIT: begin\n                if (S_AXI_RREADY) begin\n                    S_AXI_RVALID <= 1'b0;\n                    state <= IDLE;\n                end\n            end\n        endcase\n    end\nend"
    }
  },
  {
    "id": "blog-pcb-power-integrity",
    "title": "Key Considerations for 4-Layer PCB Power Integrity & Noise Decoupling on STM32",
    "date": "2025.06.12",
    "category": "Hardware & PCB",
    "readTime": "7 min read",
    "summary": "STM32 MCU 기반 4층 PCB 설계 시 24V 스위칭 레귤레이터의 노이즈가 ADC 및 커뮤니케이션 핀에 미치는 영향을 최소화하기 위한 전원 평면(Power Plane) 및 Decoupling Capacitance 배치 노하우.",
    "tags": [
      "KiCad",
      "PCB Design",
      "Power Integrity",
      "STM32",
      "LTspice",
      "EMI"
    ],
    "content": "### 4-Layer PCB 스택업 전략\n\n2층 PCB 대비 4층 PCB의 가장 큰 장점은 **전용 Ground Plane과 Power Plane**을 가질 수 있어 신호 귀환 경로(Return Path)의 임피던스를 획기적으로 낮출 수 있다는 점입니다.\n\n#### 권장 스택업 (1.6mm FR4)\n1. **Top Layer**: Signal Lines + Critical Analog Components\n2. **Layer 2**: Continuous Solid GND Plane (가장 중요)\n3. **Layer 3**: 3.3V / 5V Power Plane (Split Plane for Analog 3.3V)\n4. **Bottom Layer**: Secondary Signal + Bulk Capacitors\n\n---\n\n### Decoupling Capacitor 배치의 철칙\n\nMCU 각 VDD 핀 근처에 100nF MLCC 수식 배치가 필수입니다. 이때 Via 위치가 전원 트레이스보다 먼 쪽에 배치되면 Loop Inductance가 증가하므로:\n**VDD Pin -> 100nF Cap Pad -> Via to Power Plane** 순서로 기하학적 최소 거리를 유지해야 합니다."
  }
];
