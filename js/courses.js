/**
 * LearnSphere Course Catalog Engine
 * Interactive filtering, searching, sorting, duration filter, pagination,
 * Course Preview / "Sample Lesson" Modal, and Syllabus Export & Notes Download Engine.
 */

export const COURSES_DATA = [
  {
    id: 1,
    title: "Advanced Generative AI & Prompt Architectures",
    category: "Artificial Intelligence",
    level: "intermediate",
    durationHours: 18,
    duration: "18.5 hours",
    rating: 4.9,
    ratingCount: 1420,
    students: "12.4k",
    authorName: "Dr. Evelyn Thorne",
    authorTitle: "Senior AI Research Scientist",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: 89,
    oldPrice: 249,
    img: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop",
    description: "Master modern Large Language Model architectures, zero-shot and few-shot prompt design, LoRA fine-tuning, and RAG retrieval pipelines.",
    updatedDate: "July 2026",
    lessonsCount: 42,
    sampleLesson: {
      id: "1.1",
      title: "1.1 Transformer Attention Mechanisms & Positional Embeddings",
      duration: "14 mins",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      summary: "Explore how multi-head scaled dot-product attention allows transformer models to capture long-range contextual dependencies across tokens simultaneously.",
      keyTakeaways: [
        "Mathematical formulation of Scaled Dot-Product Attention: Softmax(Q·Kᵀ / √dₖ)·V",
        "How Rotary Positional Embeddings (RoPE) inject relative token distance information into query and key representations",
        "Techniques for reducing multi-head attention quadratic complexity through FlashAttention kernel optimizations",
        "Practical inspection of token context windows in terminal inference sandboxes"
      ],
      codeSnippet: `# Scaled Dot-Product Attention Implementation in Python
import numpy as np

def scaled_dot_product_attention(Q, K, V, mask=None):
    """
    Computes Scaled Dot-Product Attention weights and output context.
    Args:
        Q: Query matrix (batch_size, seq_len, d_k)
        K: Key matrix (batch_size, seq_len, d_k)
        V: Value matrix (batch_size, seq_len, d_v)
        mask: Optional mask tensor
    """
    d_k = Q.shape[-1]
    # Compute attention logits scaled by square root of head dimension
    scores = np.matmul(Q, K.swapaxes(-2, -1)) / np.sqrt(d_k)
    
    if mask is not None:
        scores = np.where(mask == 0, -1e9, scores)
        
    # Softmax normalization across the last axis
    weights = np.exp(scores - np.max(scores, axis=-1, keepdims=True))
    weights /= np.sum(weights, axis=-1, keepdims=True)
    
    context = np.matmul(weights, V)
    return context, weights`,
      transcript: `[00:00] Welcome to Lesson 1.1: Transformer Attention Mechanisms.
[00:45] In this lecture, we dissect why the self-attention mechanism revolutionized natural language processing by overcoming the sequential bottleneck of recurrent networks.
[02:10] Let's look at the query, key, and value projections. The query represents what information the current token searches for, while the key matrix indexes each candidate token in the prompt.
[05:30] Notice the division by the square root of d_k: without this scaling factor, the dot products grow excessively large in higher dimensions, pushing the softmax function into regions with tiny gradients.
[09:15] Now let's explore RoPE embeddings and how modern LLMs preserve relative positional relationships seamlessly.`
    },
    modules: [
      {
        title: "Module 1: Foundations of Generative Architectures",
        duration: "45 mins",
        lessons: [
          { id: "1.1", title: "1.1 Transformer Attention Mechanisms & Positional Embeddings", duration: "14 mins", isSample: true },
          { id: "1.2", title: "1.2 Context Window Memory Limits & Tokenization Algorithms", duration: "18 mins", isSample: false },
          { id: "1.3", title: "1.3 Terminal Lab: Building a Raw Tokenizer in JavaScript", duration: "13 mins", isSample: false }
        ]
      },
      {
        title: "Module 2: Advanced Prompt Engineering & Few-Shot Patterns",
        duration: "1 hr 12 mins",
        lessons: [
          { id: "2.1", title: "2.1 Zero-Shot vs Few-Shot Exemplars", duration: "15 mins", isSample: false },
          { id: "2.2", title: "2.2 Chain-of-Thought & Self-Consistency Frameworks", duration: "22 mins", isSample: false },
          { id: "2.3", title: "2.3 ReAct (Reasoning + Acting) Agent Execution", duration: "25 mins", isSample: false }
        ]
      },
      {
        title: "Module 3: RAG Pipelines & Vector Database Retrieval",
        duration: "2 hrs 05 mins",
        lessons: [
          { id: "3.1", title: "3.1 Chunking Strategies & Vector Distance Metrics", duration: "30 mins", isSample: false },
          { id: "3.2", title: "3.2 Hybrid Dense & Sparse Retrieval Pipelines", duration: "45 mins", isSample: false },
          { id: "3.3", title: "3.3 Re-ranking and Guardrail Verification", duration: "50 mins", isSample: false }
        ]
      }
    ],
    prerequisites: [
      "Familiarity with Python or JavaScript programming constructs",
      "Basic understanding of vector math (dot products and matrix multiplication)",
      "HTTP and REST API fundamentals"
    ],
    objectives: [
      "Construct high-reliability prompt templates and Chain-of-Thought pipelines",
      "Deploy low-latency RAG vector database integrations with hybrid re-ranking",
      "Fine-tune lightweight transformer adapters via LoRA and PEFT techniques",
      "Harden agentic systems against adversarial prompt injection attacks"
    ]
  },
  {
    id: 2,
    title: "Full-Stack Cloud Architecture Masterclass",
    category: "Cloud Engineering",
    level: "advanced",
    durationHours: 24,
    duration: "24.0 hours",
    rating: 4.8,
    ratingCount: 980,
    students: "8.2k",
    authorName: "Liam Sterling",
    authorTitle: "Principal Cloud Systems Architect",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    price: 129,
    oldPrice: 349,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    description: "Architect high-availability Kubernetes clusters, serverless microservices, CI/CD auto-scaling pipelines, and multi-cloud security boundaries.",
    updatedDate: "June 2026",
    lessonsCount: 56,
    sampleLesson: {
      id: "2.1",
      title: "1.1 Distributed Systems Consensus & High-Availability Topologies",
      duration: "16 mins",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      summary: "Understand Raft consensus protocols, multi-region database failover mechanisms, and active-active routing architectures under high traffic loads.",
      keyTakeaways: [
        "Raft and Paxos distributed leader election state transitions",
        "Designing zero-downtime blue/green deployment ingress patterns",
        "Edge caching and distributed state synchronization strategies",
        "Circuit breakers and bulkhead resiliency patterns in microservices"
      ],
      codeSnippet: `// Kubernetes Ingress & Auto-Scaling Spec (YAML format)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cloud-service-api
  labels:
    app: api-gateway
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-gateway
  template:
    metadata:
      labels:
        app: api-gateway
    spec:
      containers:
      - name: gateway
        image: gcr.io/learnsphere-cloud/api:v2.4
        resources:
          limits:
            cpu: "500m"
            memory: "512Mi"
          requests:
            cpu: "100m"
            memory: "128Mi"
        ports:
        - containerPort: 8080`,
      transcript: `[00:00] Welcome to Full-Stack Cloud Architecture.
[01:15] Today we're breaking down distributed consensus and failover replication across geographic regions.
[04:30] Let's analyze how the Raft consensus module maintains consistent log states between cluster nodes...`
    },
    modules: [
      {
        title: "Module 1: High-Availability Cloud Topology",
        duration: "1 hr 15 mins",
        lessons: [
          { id: "2.1", title: "1.1 Distributed Systems Consensus & High-Availability Topologies", duration: "16 mins", isSample: true },
          { id: "2.2", title: "1.2 Multi-AZ Database Replication & Split-Brain Mitigation", duration: "25 mins", isSample: false },
          { id: "2.3", title: "1.3 Edge CDN Caching & Global Load Balancers", duration: "34 mins", isSample: false }
        ]
      },
      {
        title: "Module 2: Kubernetes Orchestration & Service Meshes",
        duration: "2 hrs 30 mins",
        lessons: [
          { id: "2.1", title: "2.1 StatefulSets, Pod Disruption Budgets, & DaemonSets", duration: "45 mins", isSample: false },
          { id: "2.2", title: "2.2 Istio Mesh Traffic Shifting and Mutual TLS", duration: "55 mins", isSample: false },
          { id: "2.3", title: "2.3 HPA (Horizontal Pod Autoscaler) with Custom Metrics", duration: "50 mins", isSample: false }
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of Linux commands and Docker containers",
      "Foundational networking knowledge (TCP/IP, DNS, TLS)",
      "Command-line terminal experience"
    ],
    objectives: [
      "Design zero-downtime multi-region cloud infrastructures",
      "Deploy and manage enterprise Kubernetes clusters with automated scaling",
      "Implement observability pipelines using Prometheus, Grafana, and OpenTelemetry"
    ]
  },
  {
    id: 3,
    title: "UI/UX Design Systems & Micro-Interactions",
    category: "Interface Design",
    level: "beginner",
    durationHours: 4,
    duration: "4.5 hours",
    rating: 4.9,
    ratingCount: 2150,
    students: "15.1k",
    authorName: "Clara Fontaine",
    authorTitle: "Lead Product Designer at Voxel Studio",
    authorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    price: 49,
    oldPrice: 149,
    img: "https://images.unsplash.com/photo-1541462608141-27b2864e40c7?q=80&w=600&auto=format&fit=crop",
    description: "Design modular visual tokens, accessible high-contrast UI components, spring physics micro-animations, and responsive Figma tokens.",
    updatedDate: "August 2026",
    lessonsCount: 28,
    sampleLesson: {
      id: "3.1",
      title: "1.1 Mathematical Design Tokens & Spatial Scales",
      duration: "12 mins",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      summary: "Learn how to establish harmonic typography scales, consistent 8pt spatial rhythm grids, and accessible color tokens that pass WCAG AA contrast.",
      keyTakeaways: [
        "Modular scale math: using 1.25 (Major Third) vs 1.333 (Perfect Fourth) ratio progression",
        "8pt baseline grid alignment for predictable vertical rhythm",
        "Nested corner radius equation: R_inner = R_outer - Padding",
        "Design token synchronization between Figma variables and CSS custom properties"
      ],
      codeSnippet: `/* CSS Spatial & Typography Design Tokens */
:root {
  /* Harmonic Fluid Scale */
  --font-step--1: clamp(0.8rem, 0.75vw + 0.6rem, 0.9rem);
  --font-step-0: clamp(1rem, 0.9vw + 0.75rem, 1.15rem);
  --font-step-1: clamp(1.25rem, 1.2vw + 0.9rem, 1.5rem);
  --font-step-2: clamp(1.56rem, 1.6vw + 1.1rem, 2rem);
  
  /* Mathematical Padding Constraints */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  
  /* Corner nested curve formula */
  --radius-outer: 16px;
  --padding-box: 12px;
  --radius-inner: calc(var(--radius-outer) - var(--padding-box));
}`,
      transcript: `[00:00] Welcome to UI/UX Design Systems!
[01:00] Today we're exploring why arbitrary pixel values break design cohesion, and how mathematical token systems restore harmony.
[03:45] Notice how spacing tokens scale in multiples of 4 and 8 pixels, creating natural optical breathing room...`
    },
    modules: [
      {
        title: "Module 1: Atomic Tokens & Layout Math",
        duration: "45 mins",
        lessons: [
          { id: "3.1", title: "1.1 Mathematical Design Tokens & Spatial Scales", duration: "12 mins", isSample: true },
          { id: "3.2", title: "1.2 WCAG 2.2 Color Contrast & Dark Theme Inversion", duration: "18 mins", isSample: false },
          { id: "3.3", title: "1.3 Typography Hierarchy & Baseline Tracking", duration: "15 mins", isSample: false }
        ]
      },
      {
        title: "Module 2: Micro-Interactions & Spring Physics",
        duration: "1 hr 10 mins",
        lessons: [
          { id: "2.1", title: "2.1 Cubic-Bezier vs Spring Physics Curves", duration: "25 mins", isSample: false },
          { id: "2.2", title: "2.2 Interactive Button States & Hover Feedback", duration: "20 mins", isSample: false },
          { id: "2.3", title: "2.3 Modal Transition Stagger Animations", duration: "25 mins", isSample: false }
        ]
      }
    ],
    prerequisites: [
      "Basic familiarity with HTML & CSS",
      "No prior Figma experience required"
    ],
    objectives: [
      "Construct a production-ready design token library in Figma and code",
      "Build fluid, responsive UI components with spring micro-interactions",
      "Audit and enforce WCAG AA accessibility compliance"
    ]
  },
  {
    id: 4,
    title: "Cyber Security & Cloud Vulnerability Analysis",
    category: "Cyber Security",
    level: "advanced",
    durationHours: 16,
    duration: "16.0 hours",
    rating: 4.9,
    ratingCount: 1120,
    students: "9.4k",
    authorName: "Marcus Vance",
    authorTitle: "Chief Information Security Officer",
    authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    price: 99,
    oldPrice: 289,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    description: "Conduct ethical penetration testing, identify buffer overflows, audit IAM permission policies, and deploy zero-trust security postures.",
    updatedDate: "July 2026",
    lessonsCount: 38,
    sampleLesson: {
      id: "4.1",
      title: "1.1 Zero-Trust Architecture & Identity Boundary Verification",
      duration: "15 mins",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      summary: "Understand the shift from perimeter-based firewalls to Zero-Trust continuous verification, cryptographic tokens, and least-privilege IAM policies.",
      keyTakeaways: [
        "Core tenets of Zero-Trust: Never trust, always verify, assume breach",
        "Short-lived JWTs with asymmetric RSA/ECDSA signature verification",
        "Automated IAM permission auditing and excessive privilege revocation",
        "Real-time threat detection with SIEM correlation rules"
      ],
      codeSnippet: `// Security Token Verification Guard (Node.js/TypeScript)
import jwt from 'jsonwebtoken';

export function verifyCryptographicToken(authHeader: string, publicKey: string) {
  if (!authHeader?.startsWith('Bearer ')) {
    throw new Error('UNAUTHORIZED: Missing or malformed authorization header');
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ['RS256'],
      issuer: 'https://auth.learnsphere.io',
      clockTolerance: 5 // seconds
    });
    return decoded;
  } catch (err) {
    throw new Error('SECURITY VIOLATION: Invalid cryptographic signature');
  }
}`,
      transcript: `[00:00] Welcome to Cyber Security & Cloud Vulnerability Analysis.
[01:20] Today we dismantle the myth of secure network perimeters and construct Zero-Trust architectures...`
    },
    modules: [
      {
        title: "Module 1: Zero-Trust & Identity Governance",
        duration: "1 hr 05 mins",
        lessons: [
          { id: "4.1", title: "1.1 Zero-Trust Architecture & Identity Boundary Verification", duration: "15 mins", isSample: true },
          { id: "4.2", title: "1.2 IAM Principle of Least Privilege Auditing", duration: "25 mins", isSample: false },
          { id: "4.3", title: "1.3 Mutual TLS & Service-to-Service Encryption", duration: "25 mins", isSample: false }
        ]
      }
    ],
    prerequisites: [
      "Understanding of Linux server operations",
      "Familiarity with networking protocols (TLS, SSH, TCP/IP)"
    ],
    objectives: [
      "Perform penetration testing and vulnerability assessments",
      "Deploy Zero-Trust IAM policies and micro-segmentation",
      "Protect against OWASP Top 10 vulnerabilities and API breaches"
    ]
  },
  {
    id: 5,
    title: "Practical Machine Learning & Deep Neural Networks",
    category: "Artificial Intelligence",
    level: "intermediate",
    durationHours: 12,
    duration: "12.0 hours",
    rating: 4.7,
    ratingCount: 890,
    students: "10.1k",
    authorName: "Dr. Evelyn Thorne",
    authorTitle: "Senior AI Research Scientist",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: 79,
    oldPrice: 199,
    img: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop",
    description: "Train PyTorch models, optimize gradient descent hyper-parameters, construct convolutional neural networks, and deploy real-time inference endpoints.",
    updatedDate: "May 2026",
    lessonsCount: 34,
    sampleLesson: {
      id: "5.1",
      title: "1.1 Backpropagation & Gradient Descent Mathematical Intuition",
      duration: "13 mins",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      summary: "Derive backpropagation chain rule partial derivatives and explore AdamW weight decay momentum optimizations.",
      keyTakeaways: [
        "Computing loss gradients across multi-layer perceptrons",
        "AdamW optimizer: combining momentum with decoupled weight decay",
        "Learning rate warm-up schedules and cosine decay curves",
        "Preventing exploding gradients via norm clipping"
      ],
      codeSnippet: `# PyTorch Multi-Layer Training Loop with Gradient Clipping
import torch
import torch.nn as nn

class DeepClassifier(nn.Module):
    def __init__(self, in_features, hidden_dim, num_classes):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_features, hidden_dim),
            nn.BatchNorm1d(hidden_dim),
            nn.GELU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_dim, num_classes)
        )
    def forward(self, x):
        return self.net(x)`,
      transcript: `[00:00] Welcome to Practical Machine Learning & Deep Neural Networks...`
    },
    modules: [
      {
        title: "Module 1: Optimization & Loss Surfaces",
        duration: "55 mins",
        lessons: [
          { id: "5.1", title: "1.1 Backpropagation & Gradient Descent Mathematical Intuition", duration: "13 mins", isSample: true },
          { id: "5.2", title: "1.2 Batch Normalization & GELU Activation Dynamics", duration: "22 mins", isSample: false },
          { id: "5.3", title: "1.3 Terminal Sandbox: Training PyTorch from Scratch", duration: "20 mins", isSample: false }
        ]
      }
    ],
    prerequisites: [
      "Basic Python programming",
      "Calculus basics (derivatives and matrix operations)"
    ],
    objectives: [
      "Build and train custom PyTorch deep learning architectures",
      "Tune learning rates, optimizers, and regularization parameters",
      "Deploy neural models as real-time API endpoints"
    ]
  },
  {
    id: 6,
    title: "Vite, React, & Modern Frontend Bundling",
    category: "Interface Design",
    level: "beginner",
    durationHours: 3,
    duration: "3.5 hours",
    rating: 4.6,
    ratingCount: 1340,
    students: "11.5k",
    authorName: "Clara Fontaine",
    authorTitle: "Lead Product Designer at Voxel Studio",
    authorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    price: 39,
    oldPrice: 99,
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    description: "Accelerate frontend workflows with Vite ESM dev servers, tree-shaking bundling strategies, React 18 concurrency, and CSS module optimization.",
    updatedDate: "June 2026",
    lessonsCount: 22,
    sampleLesson: {
      id: "6.1",
      title: "1.1 Native ESM Module Graph & Lightning-Fast Bundling",
      duration: "11 mins",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      summary: "Understand why Vite is orders of magnitude faster than legacy bundlers using native browser ES module imports and Esbuild pre-bundling.",
      keyTakeaways: [
        "How native browser ESM transforms local development startup speeds",
        "Esbuild Go-based dependency pre-bundling under the hood",
        "Rollup chunk splitting and code tree-shaking optimization",
        "Configuring asset plugins and environment variable injection"
      ],
      codeSnippet: `// vite.config.ts production configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
});`,
      transcript: `[00:00] Welcome to Modern Frontend Bundling with Vite and React...`
    },
    modules: [
      {
        title: "Module 1: Native ESM & Dev Server Architecture",
        duration: "40 mins",
        lessons: [
          { id: "6.1", title: "1.1 Native ESM Module Graph & Lightning-Fast Bundling", duration: "11 mins", isSample: true },
          { id: "6.2", title: "1.2 Tree-shaking and Bundle Chunk Splitting", duration: "15 mins", isSample: false },
          { id: "6.3", title: "1.3 React 18 Concurrency & Transitions", duration: "14 mins", isSample: false }
        ]
      }
    ],
    prerequisites: ["JavaScript ES6+ fundamentals", "Basic HTML/CSS knowledge"],
    objectives: [
      "Master modern bundling workflows with Vite and ES Modules",
      "Optimize production web bundles for sub-second page loads",
      "Deploy scalable React application architectures"
    ]
  },
  {
    id: 7,
    title: "Autonomous Agent Systems & LangChain Workflows",
    category: "Artificial Intelligence",
    level: "advanced",
    durationHours: 14,
    duration: "14.2 hours",
    rating: 4.9,
    ratingCount: 760,
    students: "7.8k",
    authorName: "Dr. Evelyn Thorne",
    authorTitle: "Senior AI Research Scientist",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: 109,
    oldPrice: 279,
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    description: "Build stateful multi-agent orchestrations, function calling tools, autonomous feedback loops, and persistent vector memory banks.",
    updatedDate: "August 2026",
    lessonsCount: 36,
    sampleLesson: {
      id: "7.1",
      title: "1.1 ReAct Reasoning Loops & Structured Function Calling",
      duration: "15 mins",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      summary: "Construct stateful autonomous agent loops where models reason about tools, execute function parameters, inspect outputs, and self-correct.",
      keyTakeaways: [
        "The ReAct paradigm: Thought -> Action -> Observation -> Final Answer",
        "Deterministic JSON schema validation for function calling APIs",
        "Handling tool execution timeouts, errors, and retry policies",
        "State graph persistence across multi-turn agent conversations"
      ],
      codeSnippet: `# Multi-Agent ReAct Tool Execution Loop
import json

def agent_execution_cycle(model, prompt, tools, max_iterations=5):
    """
    Executes a multi-turn agentic loop with tool invocation and reflection.
    """
    messages = [{"role": "user", "content": prompt}]
    
    for i in range(max_iterations):
        response = model.generate(messages, tools=tools)
        
        if not response.tool_calls:
            return response.text # Solved
            
        for call in response.tool_calls:
            tool_result = execute_tool(call.name, call.args)
            messages.append({
                "role": "tool",
                "tool_call_id": call.id,
                "content": json.dumps(tool_result)
            })
    return "Agent reached maximum iteration limit."`,
      transcript: `[00:00] Welcome to Autonomous Agent Systems & Tool-Calling Loops...`
    },
    modules: [
      {
        title: "Module 1: Agentic Orchestration & Tools",
        duration: "1 hr 10 mins",
        lessons: [
          { id: "7.1", title: "1.1 ReAct Reasoning Loops & Structured Function Calling", duration: "15 mins", isSample: true },
          { id: "7.2", title: "1.2 Persistent Memory Banks & Vector Graph Stores", duration: "25 mins", isSample: false },
          { id: "7.3", title: "1.3 Multi-Agent Communication & Supervisor Trees", duration: "30 mins", isSample: false }
        ]
      }
    ],
    prerequisites: ["Python proficiency", "Understanding of LLM APIs and prompt design"],
    objectives: [
      "Construct robust autonomous agents with reliable tool execution",
      "Implement multi-agent supervisor hierarchies and state graphs",
      "Deploy self-correcting code generation and research agents"
    ]
  },
  {
    id: 8,
    title: "DevOps Pipeline Automation & Infrastructure as Code",
    category: "Cloud Engineering",
    level: "intermediate",
    durationHours: 10,
    duration: "10.0 hours",
    rating: 4.8,
    ratingCount: 840,
    students: "6.9k",
    authorName: "Liam Sterling",
    authorTitle: "Principal Cloud Systems Architect",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    price: 85,
    oldPrice: 219,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    description: "Automate cloud deployment with Terraform HCL, Ansible configuration modules, GitHub Actions matrix builds, and Prometheus monitoring.",
    updatedDate: "July 2026",
    lessonsCount: 30,
    sampleLesson: {
      id: "8.1",
      title: "1.1 Declarative Infrastructure with Terraform & State Locks",
      duration: "14 mins",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      summary: "Master declarative infrastructure provisioning using Terraform HCL, remote state locking via DynamoDB/Cloud Storage, and module reusability.",
      keyTakeaways: [
        "Declarative vs Imperative infrastructure definitions",
        "Managing remote state files securely with cryptographic encryption",
        "Terraform plan dry-runs and automated pull request validations",
        "Zero-downtime resource recreation using lifecycle blocks"
      ],
      codeSnippet: `# Terraform Infrastructure as Code Resource Definition
terraform {
  required_version = ">= 1.5.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

resource "google_cloud_run_v2_service" "applet_service" {
  name     = "learnsphere-core-api"
  location = "us-central1"
  ingress  = "INGRESS_TRAFFIC_ALL"

  template {
    containers {
      image = "us-central1-docker.pkg.dev/learnsphere/apps/api:latest"
      resources {
        limits = {
          cpu    = "2"
          memory = "2Gi"
        }
      }
    }
    scaling {
      min_instance_count = 1
      max_instance_count = 10
    }
  }
}`,
      transcript: `[00:00] Welcome to DevOps Pipeline Automation & Infrastructure as Code...`
    },
    modules: [
      {
        title: "Module 1: Infrastructure as Code & State",
        duration: "50 mins",
        lessons: [
          { id: "8.1", title: "1.1 Declarative Infrastructure with Terraform & State Locks", duration: "14 mins", isSample: true },
          { id: "8.2", title: "1.2 CI/CD GitHub Actions Workflow Matrix Builds", duration: "18 mins", isSample: false },
          { id: "8.3", title: "1.3 Prometheus Metrics & Grafana Alerting Setup", duration: "18 mins", isSample: false }
        ]
      }
    ],
    prerequisites: ["Familiarity with Git and YAML syntax", "Basic Linux command line skills"],
    objectives: [
      "Provision reproducible cloud environments with Terraform",
      "Construct automated CI/CD deployment pipelines in GitHub Actions",
      "Monitor application performance with Prometheus and Grafana dashboards"
    ]
  }
];

/* -------------------------------------------------------------
 * Toast Notification Utility
 * ------------------------------------------------------------- */
export function showLearnSphereToast(message, icon = '✓') {
  let toast = document.querySelector('.learnsphere-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'learnsphere-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:var(--secondary-color); color:var(--bg-color); font-weight:800; font-size:0.75rem;">${icon}</span>
    <span>${message}</span>
  `;

  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

/* -------------------------------------------------------------
 * FEATURE 1: Course Preview / "Sample Lesson" Modal
 * ------------------------------------------------------------- */
export function openSampleLessonModal(courseId) {
  const course = COURSES_DATA.find(c => c.id === parseInt(courseId, 10)) || COURSES_DATA[0];
  const sample = course.sampleLesson;

  // Remove any previous sample lesson modal instance
  const existingModal = document.getElementById('learnsphere-sample-lesson-modal');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.id = 'learnsphere-sample-lesson-modal';
  modal.className = 'modal';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 880px;">
      <!-- Header -->
      <div class="modal-header">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div style="width: 38px; height: 38px; border-radius: 50%; background: rgba(6, 182, 212, 0.15); border: 1px solid rgba(6, 182, 212, 0.3); display: flex; align-items: center; justify-content: center; color: var(--secondary-color);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="badge" style="font-size: 0.65rem; padding: 0.15rem 0.5rem; margin-bottom: 0;">Open Sample Lesson</span>
              <span style="font-size: 0.8rem; color: var(--text-secondary);">⏱ ${sample.duration}</span>
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: #FFF; margin-top: 0.2rem;">${sample.title}</h3>
          </div>
        </div>
        <button class="modal-close" id="sample-modal-close-btn" aria-label="Close Preview Modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Navigation Tabs -->
      <div class="sample-modal-tabs">
        <button class="sample-modal-tab active" data-tab="video-panel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>Video Lecture</span>
        </button>
        <button class="sample-modal-tab" data-tab="notes-panel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          <span>Lesson Notes & Takeaways</span>
        </button>
        <button class="sample-modal-tab" data-tab="code-panel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          <span>Code Sandbox Snippet</span>
        </button>
        <button class="sample-modal-tab" data-tab="transcript-panel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Transcript</span>
        </button>
      </div>

      <!-- Modal Body Tab Content -->
      <div class="modal-body">
        <!-- 1. Video Player Tab -->
        <div class="sample-tab-panel active" id="video-panel">
          <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; background: #000; border: 1px solid var(--border-color); margin-bottom: 1.25rem;">
            <video id="sample-lesson-video" controls autoplay style="width: 100%; aspect-ratio: 16/9; display: block;">
              <source src="${sample.videoSrc}" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem 1.25rem;">
            <p style="color: #E2E8F0; font-size: 0.9rem; line-height: 1.6; margin: 0;">
              <strong>Lesson Focus:</strong> ${sample.summary}
            </p>
          </div>
        </div>

        <!-- 2. Notes & Key Takeaways Tab -->
        <div class="sample-tab-panel" id="notes-panel">
          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #FFF; margin-bottom: 0.5rem;">Lesson Overview</h4>
            <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">${sample.summary}</p>
          </div>
          <h4 style="font-size: 1.05rem; font-weight: 700; color: #FFF; margin-bottom: 1rem;">Key Core Competencies Acquired</h4>
          <ul class="sample-takeaways-list">
            ${sample.keyTakeaways.map(item => `
              <li class="sample-takeaways-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- 3. Code Sandbox Tab -->
        <div class="sample-tab-panel" id="code-panel">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-size: 0.85rem; color: var(--text-secondary); font-family: var(--font-display);">Lab Sandbox Source Code</span>
            <button class="export-btn-pill" id="copy-snippet-btn" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy Code</span>
            </button>
          </div>
          <pre class="sample-code-viewer"><code>${sample.codeSnippet.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>

        <!-- 4. Transcript Tab -->
        <div class="sample-tab-panel" id="transcript-panel">
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; max-height: 280px; overflow-y: auto;">
            <p style="color: #CBD5E1; font-size: 0.9rem; line-height: 1.8; white-space: pre-line; margin: 0;">${sample.transcript}</p>
          </div>
        </div>
      </div>

      <!-- Footer CTA Bar -->
      <div style="padding: 1.25rem 1.75rem; background: rgba(0, 0, 0, 0.3); border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="${course.authorImg}" alt="${course.authorName}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1px solid var(--secondary-color);" />
          <div>
            <span style="font-size: 0.85rem; font-weight: 600; color: #FFF; display: block;">${course.authorName}</span>
            <span style="font-size: 0.75rem; color: var(--text-secondary);">${course.authorTitle}</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <button class="export-btn-pill" id="sample-download-syllabus-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Download Syllabus</span>
          </button>
          <a href="/pages/course-details.html?id=${course.id}" class="btn btn-secondary" style="padding: 0.55rem 1.1rem; font-size: 0.85rem;">View Full Course</a>
          <button class="btn btn-primary" id="sample-modal-enroll-btn" style="padding: 0.55rem 1.25rem; font-size: 0.85rem;">
            <span>Enroll ($${course.price}.00)</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Trigger animation
  setTimeout(() => modal.classList.add('active'), 10);

  // Tab switching logic
  const tabs = modal.querySelectorAll('.sample-modal-tab');
  const panels = modal.querySelectorAll('.sample-tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetPanel = modal.querySelector(`#${tab.getAttribute('data-tab')}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Close logic
  const closeModal = () => {
    const video = modal.querySelector('#sample-lesson-video');
    if (video) video.pause();
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 350);
  };

  const closeBtn = modal.querySelector('#sample-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Copy code snippet
  const copyBtn = modal.querySelector('#copy-snippet-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(sample.codeSnippet).then(() => {
        showLearnSphereToast('Sample code copied to clipboard!');
        copyBtn.innerHTML = `<span>✓ Copied!</span>`;
        setTimeout(() => {
          copyBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy Code</span>
          `;
        }, 2000);
      });
    });
  }

  // Download Syllabus button inside modal
  const downloadSyllabusBtn = modal.querySelector('#sample-download-syllabus-btn');
  if (downloadSyllabusBtn) {
    downloadSyllabusBtn.addEventListener('click', () => {
      exportSyllabusPDF(course);
    });
  }

  // Enroll button inside modal
  const enrollBtn = modal.querySelector('#sample-modal-enroll-btn');
  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
      closeModal();
      if (typeof window.createCheckoutModal === 'function') {
        window.createCheckoutModal(course.title, `$${course.price}.00`);
      }
    });
  }
}

/* -------------------------------------------------------------
 * FEATURE 2: Export / Download Syllabus PDF or Notes
 * ------------------------------------------------------------- */

/**
 * 1. Export Syllabus as PDF (Formatted, Printable Document)
 */
export function exportSyllabusPDF(course) {
  if (!course) course = COURSES_DATA[0];

  // Open formatted print document
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    // Fallback if popups blocked: trigger window.print directly
    window.print();
    return;
  }

  const modulesHtml = course.modules.map((m, idx) => `
    <div style="margin-bottom: 22px; padding: 14px; border: 1px solid #E2E8F0; border-radius: 8px; background: #F8FAFC;">
      <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0F172A; display: flex; justify-content: space-between;">
        <span>${m.title}</span>
        <span style="font-size: 13px; color: #64748B; font-weight: normal;">⏱ ${m.duration}</span>
      </h3>
      <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.7;">
        ${m.lessons.map(l => `<li><strong>${l.title}</strong> &mdash; ${l.duration} ${l.isSample ? '<span style="color: #0284C7; font-size: 11px; font-weight: bold;">[SAMPLE LESSON]</span>' : ''}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const objectivesHtml = course.objectives.map(o => `<li style="margin-bottom: 6px;">${o}</li>`).join('');
  const prerequisitesHtml = course.prerequisites.map(p => `<li style="margin-bottom: 6px;">${p}</li>`).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${course.title} - Official Syllabus • LearnSphere</title>
        <style>
          @page { margin: 20mm; size: A4; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0F172A; margin: 0; padding: 24px; line-height: 1.5; }
          .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0F172A; padding-bottom: 16px; margin-bottom: 24px; }
          .logo { font-size: 24px; font-weight: 800; color: #4338CA; }
          .logo span { color: #06B6D4; }
          .meta-pill { display: inline-block; padding: 4px 10px; background: #EEF2FF; color: #4338CA; border-radius: 999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; }
          h1 { font-size: 26px; margin: 0 0 10px 0; color: #0F172A; line-height: 1.2; }
          .summary { font-size: 15px; color: #475569; margin-bottom: 20px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
          .card { padding: 14px; border: 1px solid #E2E8F0; border-radius: 8px; }
          .card h4 { margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; color: #64748B; }
          .card p { margin: 0; font-size: 14px; font-weight: 600; }
          .section-title { font-size: 18px; font-weight: 700; border-bottom: 1px solid #CBD5E1; padding-bottom: 6px; margin: 28px 0 16px 0; }
          .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #94A3B8; display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo">Learn<span>Sphere</span></div>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748B;">Official Course Curriculum & Study Specification</p>
          </div>
          <div style="text-align: right; font-size: 13px; color: #64748B;">
            <div><strong>Verified Syllabus ID:</strong> LS-${course.id}09-${Math.floor(1000 + Math.random() * 9000)}</div>
            <div><strong>Updated:</strong> ${course.updatedDate}</div>
          </div>
        </div>

        <span class="meta-pill">${course.category} • ${course.level.toUpperCase()} TRACK</span>
        <h1>${course.title}</h1>
        <p class="summary">${course.description}</p>

        <div class="grid">
          <div class="card">
            <h4>Lead Instructor</h4>
            <p>${course.authorName}</p>
            <span style="font-size: 12px; color: #64748B;">${course.authorTitle}</span>
          </div>
          <div class="card">
            <h4>Course Structure</h4>
            <p>${course.duration} Total • ${course.lessonsCount} Modules & Labs</p>
            <span style="font-size: 12px; color: #64748B;">Verified Certificate of Completion Included</span>
          </div>
        </div>

        <div class="section-title">Key Learning Outcomes & Competencies</div>
        <ul style="padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.7;">
          ${objectivesHtml}
        </ul>

        <div class="section-title">Prerequisites & Knowledge Baseline</div>
        <ul style="padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.7;">
          ${prerequisitesHtml}
        </ul>

        <div class="section-title">Complete Curriculum Breakdown</div>
        ${modulesHtml}

        <div class="footer">
          <span>© 2026 LearnSphere Global Inc. • All Rights Reserved</span>
          <span>Verified Cryptographic Accreditation Node</span>
        </div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
  showLearnSphereToast('Generated printable PDF syllabus!');
}

/**
 * 2. Export / Download Course Notes as Markdown (.md)
 */
export function downloadCourseNotes(course) {
  if (!course) course = COURSES_DATA[0];

  const markdownContent = `# ${course.title}
**Category:** ${course.category} | **Level:** ${course.level} | **Duration:** ${course.duration}
**Lead Instructor:** ${course.authorName} (${course.authorTitle})
**LearnSphere Accreditation ID:** LS-SYLLABUS-${course.id}

---

## 1. Course Overview
${course.description}

### Core Learning Objectives
${course.objectives.map(o => `- ${o}`).join('\n')}

### Prerequisites
${course.prerequisites.map(p => `- ${p}`).join('\n')}

---

## 2. Curriculum & Module Outline

${course.modules.map(m => `### ${m.title} (Duration: ${m.duration})
${m.lessons.map(l => `- **${l.title}** [${l.duration}] ${l.isSample ? '*(Sample Lesson Included)*' : ''}`).join('\n')}`).join('\n\n')}

---

## 3. Sample Lesson Study Notes & Key Takeaways
**Topic:** ${course.sampleLesson.title}
**Duration:** ${course.sampleLesson.duration}

### Summary
${course.sampleLesson.summary}

### Key Takeaways
${course.sampleLesson.keyTakeaways.map(k => `- ${k}`).join('\n')}

### Lab Sandbox Code Snippet
\`\`\`
${course.sampleLesson.codeSnippet}
\`\`\`

### Lecture Notes & Transcript Reference
${course.sampleLesson.transcript}

---
*Generated via LearnSphere Global Study Vault & Learning Management System.*
`;

  const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const sanitizedTitle = course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  a.href = url;
  a.download = `${sanitizedTitle}-syllabus-and-notes.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showLearnSphereToast('Course Notes & Syllabus (.md) downloaded!');
}

/**
 * 3. Copy Syllabus Summary to Clipboard
 */
export function copySyllabusSummary(course) {
  if (!course) course = COURSES_DATA[0];

  const textSummary = `📚 ${course.title}
Instructor: ${course.authorName} (${course.authorTitle})
Category: ${course.category} | Level: ${course.level} | Duration: ${course.duration}

OVERVIEW:
${course.description}

CURRICULUM MODULES:
${course.modules.map(m => `• ${m.title} (${m.duration})\n  ${m.lessons.map(l => `  - ${l.title} [${l.duration}]`).join('\n')}`).join('\n\n')}

OBJECTIVES:
${course.objectives.map(o => `✓ ${o}`).join('\n')}

Access full curriculum at: https://learnsphere.io/pages/course-details.html?id=${course.id}`;

  navigator.clipboard.writeText(textSummary).then(() => {
    showLearnSphereToast('Syllabus summary copied to clipboard!');
  });
}

// Global window mappings for modular compatibility
window.openSampleLessonModal = openSampleLessonModal;
window.exportSyllabusPDF = exportSyllabusPDF;
window.downloadCourseNotes = downloadCourseNotes;
window.copySyllabusSummary = copySyllabusSummary;
window.showLearnSphereToast = showLearnSphereToast;

/* -------------------------------------------------------------
 * Catalog Initialization & Rendering Engine
 * ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('catalog-course-grid');
  const searchInput = document.getElementById('catalog-search');
  const sortSelect = document.getElementById('catalog-sort');
  const displayedCount = document.getElementById('displayed-count');
  const totalCount = document.getElementById('total-count');
  const paginationContainer = document.getElementById('catalog-pagination');

  if (!grid) return;

  const ITEMS_PER_PAGE = 4;
  let currentPage = 1;
  let activeFilteredCourses = [...COURSES_DATA];

  if (totalCount) totalCount.textContent = COURSES_DATA.length;

  function resetAllFilters() {
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.category-filter, .level-filter, .duration-filter').forEach(cb => {
      cb.checked = false;
    });
    if (sortSelect) sortSelect.value = 'popular';
    filterAndSortCourses();
  }

  function renderCourses(courses, page = 1) {
    grid.innerHTML = '';
    
    if (courses.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--surface-glass); border: 1px solid var(--border-color); border-radius: var(--radius-lg); backdrop-filter: blur(12px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25); display: flex; align-items: center; justify-content: center; color: var(--secondary-color); margin-bottom: 0.25rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </div>
          <h3 style="font-family: var(--font-display); font-weight: 700; font-size: 1.35rem; color: #FFF; margin: 0;">No courses found matching your criteria</h3>
          <p style="color: var(--text-secondary); max-width: 440px; margin: 0; font-size: 0.95rem; line-height: 1.5;">
            We couldn't find any learning programs matching your active search query or filter selection. Try adjusting your parameters.
          </p>
          <button id="reset-filters-btn" class="btn btn-secondary" style="margin-top: 0.5rem; padding: 0.6rem 1.25rem; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            <span>Reset Filters</span>
          </button>
        </div>
      `;
      if (displayedCount) displayedCount.textContent = '0';
      if (paginationContainer) paginationContainer.innerHTML = '';

      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    const totalPages = Math.ceil(courses.length / ITEMS_PER_PAGE);
    if (page > totalPages) page = totalPages;
    if (page < 1) page = 1;
    currentPage = page;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = courses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    paginatedItems.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      
      const levelClass = course.level === 'beginner' ? 'beginner' : course.level === 'intermediate' ? 'intermediate' : 'advanced';
      const levelLabel = course.level.charAt(0).toUpperCase() + course.level.slice(1);

      card.innerHTML = `
        <div class="course-thumbnail-container" onclick="window.location.href='/pages/course-details.html?id=${course.id}'" style="cursor: pointer;">
          <img src="${course.img}" alt="${course.title}" class="course-thumbnail" />
          <div class="course-thumb-overlay">
            <span class="course-level ${levelClass}">${levelLabel}</span>
          </div>
        </div>
        <div class="course-body">
          <div>
            <div class="course-meta">
              <span class="course-tag">${course.category}</span>
              <div class="course-rating">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>${course.rating}</span>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">(${course.ratingCount})</span>
              </div>
            </div>
            <a href="/pages/course-details.html?id=${course.id}" class="course-title" style="font-size: 1.15rem; text-decoration: none; display: block;">${course.title}</a>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem; display: flex; align-items: center; gap: 1rem;">
              <span>⏱ ${course.duration}</span>
              <span>📚 ${course.lessonsCount} lessons</span>
            </div>
          </div>
          <div style="margin-top: 1.25rem;">
            <div class="course-author">
              <img src="${course.authorImg}" alt="${course.authorName}" class="author-img" />
              <div>
                <span class="author-name">${course.authorName}</span>
                <span style="display: block; font-size: 0.7rem; color: var(--text-secondary);">${course.students} scholars</span>
              </div>
            </div>
            <div class="course-footer">
              <div class="course-price">$${course.price}.00 <span>$${course.oldPrice}.00</span></div>
              <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
                <button class="export-btn-pill sample-preview-trigger" data-course-id="${course.id}" style="padding: 0.4rem 0.65rem; font-size: 0.75rem;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  <span>Sample</span>
                </button>
                <a href="/pages/course-details.html?id=${course.id}" class="btn btn-secondary" style="padding: 0.4rem 0.75rem; font-size: 0.78rem;">Details</a>
                <button class="course-enroll-btn enroll-trigger" data-course-title="${course.title}" data-course-price="$${course.price}.00">
                  <span>Enroll</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    if (displayedCount) displayedCount.textContent = courses.length;

    // Setup hover light tracks for new cards
    const hoverCards = grid.querySelectorAll('.course-card');
    hoverCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Sample Lesson preview buttons
    grid.querySelectorAll('.sample-preview-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const cId = btn.getAttribute('data-course-id');
        openSampleLessonModal(cId);
      });
    });

    // Re-bind dynamically generated buttons to checkout modal injector (defined in main.js)
    const newTriggers = grid.querySelectorAll('.enroll-trigger');
    newTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const title = btn.getAttribute('data-course-title');
        const price = btn.getAttribute('data-course-price');
        if (typeof window.createCheckoutModal === 'function') {
          window.createCheckoutModal(title, price);
        } else {
          document.dispatchEvent(new CustomEvent('triggerCheckout', { detail: { title, price } }));
        }
      });
    });

    renderPagination(totalPages, currentPage);
  }

  function renderPagination(totalPages, page) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';

    if (totalPages <= 1) return;

    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn btn-secondary';
    prevBtn.style.padding = '0.5rem 0.85rem';
    prevBtn.style.fontSize = '0.85rem';
    prevBtn.disabled = page === 1;
    prevBtn.innerHTML = `&larr; Prev`;
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        renderCourses(activeFilteredCourses, currentPage - 1);
        window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
      }
    });
    paginationContainer.appendChild(prevBtn);

    // Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.style.width = '38px';
      pageBtn.style.height = '38px';
      pageBtn.style.borderRadius = 'var(--radius-sm)';
      pageBtn.style.fontFamily = 'var(--font-main)';
      pageBtn.style.fontSize = '0.85rem';
      pageBtn.style.fontWeight = '600';
      pageBtn.style.cursor = 'pointer';
      pageBtn.style.transition = 'var(--transition-fast)';

      if (i === page) {
        pageBtn.style.background = 'var(--secondary-color)';
        pageBtn.style.color = 'var(--bg-color)';
        pageBtn.style.border = '1px solid var(--secondary-color)';
      } else {
        pageBtn.style.background = 'var(--surface-glass)';
        pageBtn.style.color = 'var(--text-secondary)';
        pageBtn.style.border = '1px solid var(--border-color)';
      }

      pageBtn.textContent = i;
      pageBtn.addEventListener('click', () => {
        renderCourses(activeFilteredCourses, i);
        window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
      });
      paginationContainer.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-secondary';
    nextBtn.style.padding = '0.5rem 0.85rem';
    nextBtn.style.fontSize = '0.85rem';
    nextBtn.disabled = page === totalPages;
    nextBtn.innerHTML = `Next &rarr;`;
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        renderCourses(activeFilteredCourses, currentPage + 1);
        window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
      }
    });
    paginationContainer.appendChild(nextBtn);
  }

  // Live filter calculation
  function filterAndSortCourses() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    // Checked Categories
    const checkedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
      .map(cb => cb.value);

    // Checked Levels
    const checkedLevels = Array.from(document.querySelectorAll('.level-filter:checked'))
      .map(cb => cb.value);

    // Checked Duration
    const checkedDurations = Array.from(document.querySelectorAll('.duration-filter:checked'))
      .map(cb => cb.value);

    let filtered = COURSES_DATA.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(query) || 
                            course.category.toLowerCase().includes(query) ||
                            course.authorName.toLowerCase().includes(query);

      const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(course.category);
      const matchesLevel = checkedLevels.length === 0 || checkedLevels.includes(course.level);

      let matchesDuration = true;
      if (checkedDurations.length > 0) {
        matchesDuration = checkedDurations.some(dur => {
          if (dur === 'short') return course.durationHours < 5;
          if (dur === 'medium') return course.durationHours >= 5 && course.durationHours <= 15;
          if (dur === 'long') return course.durationHours > 15;
          return true;
        });
      }

      return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
    });

    // Sorting
    const sortBy = sortSelect ? sortSelect.value : 'popular';
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      // Popular
      filtered.sort((a, b) => parseFloat(b.students) - parseFloat(a.students));
    }

    activeFilteredCourses = filtered;
    renderCourses(activeFilteredCourses, 1);
  }

  const sidebarResetBtn = document.getElementById('sidebar-reset-filters');
  if (sidebarResetBtn) {
    sidebarResetBtn.addEventListener('click', resetAllFilters);
  }

  // Attach event listeners
  if (searchInput) searchInput.addEventListener('input', filterAndSortCourses);
  if (sortSelect) sortSelect.addEventListener('change', filterAndSortCourses);
  
  document.querySelectorAll('.category-filter').forEach(cb => {
    cb.addEventListener('change', filterAndSortCourses);
  });
  
  document.querySelectorAll('.level-filter').forEach(cb => {
    cb.addEventListener('change', filterAndSortCourses);
  });

  document.querySelectorAll('.duration-filter').forEach(cb => {
    cb.addEventListener('change', filterAndSortCourses);
  });

  // Initial render
  activeFilteredCourses = [...COURSES_DATA];
  renderCourses(activeFilteredCourses, 1);

  // Custom event listener for inter-module communication
  document.addEventListener('triggerCheckout', (e) => {
    const { title, price } = e.detail;
    if (typeof window.createCheckoutModal === 'function') {
      window.createCheckoutModal(title, price);
    }
  });
});
