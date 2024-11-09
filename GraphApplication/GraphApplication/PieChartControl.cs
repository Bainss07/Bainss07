using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Windows.Forms;

namespace GraphApplication
{
    public class PieChartControl : Control
    {
        private List<double> values = new List<double>();
        private List<(Color, Color)> gradientColors = new List<(Color, Color)>();
        private List<string> labels = new List<string>();

        public PieChartControl()
        {
            DoubleBuffered = true;
            InitializeGradientColors();
        }

        private void InitializeGradientColors()
        {
            gradientColors = new List<(Color, Color)>
            {
                (Color.FromArgb(255, 92, 141, 194), Color.FromArgb(255, 173, 216, 230)),
                (Color.FromArgb(255, 93, 174, 86), Color.FromArgb(255, 144, 238, 144)),
                (Color.FromArgb(255, 234, 126, 83), Color.FromArgb(255, 255, 182, 193)),
                (Color.FromArgb(255, 203, 80, 80), Color.FromArgb(255, 255, 160, 122)),
                (Color.FromArgb(255, 155, 89, 182), Color.FromArgb(255, 218, 112, 214)),
                (Color.FromArgb(255, 72, 201, 176), Color.FromArgb(255, 175, 238, 238)),
                (Color.FromArgb(255, 241, 196, 15), Color.FromArgb(255, 255, 235, 59)),
                (Color.FromArgb(255, 52, 73, 94), Color.FromArgb(255, 135, 206, 235)),
                (Color.FromArgb(255, 243, 156, 18), Color.FromArgb(255, 255, 228, 181)),
                (Color.FromArgb(255, 231, 76, 60), Color.FromArgb(255, 250, 128, 114)),
                (Color.FromArgb(255, 46, 204, 113), Color.FromArgb(255, 152, 251, 152)),
                (Color.FromArgb(255, 142, 68, 173), Color.FromArgb(255, 216, 191, 216)),
                (Color.FromArgb(255, 52, 152, 219), Color.FromArgb(255, 135, 206, 250)),
                (Color.FromArgb(255, 127, 140, 141), Color.FromArgb(255, 192, 192, 192))
            };
        }

        public void SetData(List<double> data)
        {
            values = data;
            labels = GenerateLabels(data);
            Invalidate();
        }

        private List<string> GenerateLabels(List<double> data)
        {
            double total = data.Sum();
            List<string> labels = new List<string>();

            foreach (var value in data)
            {
                double percentage = (value / total) * 100;
                labels.Add($"{percentage:F1}%");
            }

            return labels;
        }

        protected override void OnPaint(PaintEventArgs e)
        {
            base.OnPaint(e);

            if (values.Count == 0) return;

            Graphics g = e.Graphics;
            g.SmoothingMode = SmoothingMode.AntiAlias;

            int size = Math.Min(Width - 150, Height - 50);
            Rectangle chartRect = new Rectangle(20, 20, size, size);

            double total = values.Sum();
            float startAngle = 0;

            for (int i = 0; i < values.Count; i++)
            {
                double percentage = values[i] / total;
                float sweepAngle = (float)(percentage * 360);

                var (startColor, endColor) = gradientColors[i % gradientColors.Count];
                using (var brush = new LinearGradientBrush(chartRect, startColor, endColor, LinearGradientMode.ForwardDiagonal))
                {
                    g.FillPie(brush, chartRect, startAngle, sweepAngle);
                }

                // Display percentage label within the pie slice
                float midAngle = startAngle + sweepAngle / 2;
                double radians = (Math.PI / 180) * midAngle;
                float labelX = (float)(chartRect.Left + chartRect.Width / 2 + (chartRect.Width / 3 * Math.Cos(radians)));
                float labelY = (float)(chartRect.Top + chartRect.Height / 2 + (chartRect.Height / 3 * Math.Sin(radians)));
                string label = labels[i];
                SizeF labelSize = g.MeasureString(label, Font);
                g.DrawString(label, Font, Brushes.Black, labelX - labelSize.Width / 2, labelY - labelSize.Height / 2);

                // Draw legend with values
                Rectangle legendRect = new Rectangle(Width - 110, 30 + (i * 30), 20, 20);
                using (var brush = new LinearGradientBrush(legendRect, startColor, endColor, LinearGradientMode.ForwardDiagonal))
                {
                    g.FillRectangle(brush, legendRect);
                }
                g.DrawString($"{values[i]:F1}", new Font("Segoe UI", 9), Brushes.Black, Width - 80, 30 + (i * 30));

                startAngle += sweepAngle;
            }
        }
    }
}
