using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Windows.Forms;

namespace GraphApplication
{
    partial class Form1 : Form
    {
        private System.ComponentModel.IContainer components = null;
        private System.Windows.Forms.Panel panelChart;
        private System.Windows.Forms.TextBox txtDataInput;
        private System.Windows.Forms.Button btnDrawChart;
        private PieChartControl pieChartControl;
        private System.Windows.Forms.Label lblHeading;

      
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.txtDataInput = new System.Windows.Forms.TextBox();
            this.btnDrawChart = new System.Windows.Forms.Button();
            this.pieChartControl = new GraphApplication.PieChartControl();
            this.panelChart = new System.Windows.Forms.Panel();
            this.lblHeading = new System.Windows.Forms.Label();
            this.lblPlaceholder = new System.Windows.Forms.Label();
            this.Label = new System.Windows.Forms.Label();
            this.panelChart.SuspendLayout();
            this.SuspendLayout();
            // 
            // txtDataInput
            // 
            this.txtDataInput.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(240)))), ((int)(((byte)(240)))), ((int)(((byte)(240)))));
            this.txtDataInput.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.txtDataInput.Font = new System.Drawing.Font("Segoe UI", 11F);
            this.txtDataInput.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.txtDataInput.Location = new System.Drawing.Point(20, 80);
            this.txtDataInput.Name = "txtDataInput";
            this.txtDataInput.Size = new System.Drawing.Size(320, 20);
            this.txtDataInput.TabIndex = 6;
            this.txtDataInput.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            this.txtDataInput.TextChanged += new System.EventHandler(this.txtDataInput_TextChanged);
            // 
            // btnDrawChart
            // 
            this.btnDrawChart.BackColor = System.Drawing.Color.Black;
            this.btnDrawChart.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnDrawChart.Font = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Bold);
            this.btnDrawChart.ForeColor = System.Drawing.Color.White;
            this.btnDrawChart.Location = new System.Drawing.Point(360, 75);
            this.btnDrawChart.Name = "btnDrawChart";
            this.btnDrawChart.Size = new System.Drawing.Size(100, 30);
            this.btnDrawChart.TabIndex = 1;
            this.btnDrawChart.Text = "Draw Chart";
            this.btnDrawChart.UseVisualStyleBackColor = false;
            this.btnDrawChart.Click += new System.EventHandler(this.btnDrawChart_Click);
            // 
            // pieChartControl
            // 
            this.pieChartControl.Location = new System.Drawing.Point(10, 10);
            this.pieChartControl.Name = "pieChartControl";
            this.pieChartControl.Size = new System.Drawing.Size(420, 307);
            this.pieChartControl.TabIndex = 0;
            // 
            // panelChart
            // 
            this.panelChart.BackColor = System.Drawing.Color.White;
            this.panelChart.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.panelChart.Controls.Add(this.pieChartControl);
            this.panelChart.Location = new System.Drawing.Point(20, 120);
            this.panelChart.Name = "panelChart";
            this.panelChart.Size = new System.Drawing.Size(440, 301);
            this.panelChart.TabIndex = 5;
            // 
            // lblHeading
            // 
            this.lblHeading.AutoSize = true;
            this.lblHeading.Font = new System.Drawing.Font("Segoe UI", 16F, System.Drawing.FontStyle.Bold);
            this.lblHeading.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(123)))), ((int)(((byte)(255)))));
            this.lblHeading.Location = new System.Drawing.Point(20, 10);
            this.lblHeading.Name = "lblHeading";
            this.lblHeading.Size = new System.Drawing.Size(234, 30);
            this.lblHeading.TabIndex = 4;
            this.lblHeading.Text = "Pie Chart Application";
            // 
            // lblPlaceholder
            // 
            this.lblPlaceholder.Location = new System.Drawing.Point(0, 0);
            this.lblPlaceholder.Name = "lblPlaceholder";
            this.lblPlaceholder.Size = new System.Drawing.Size(100, 23);
            this.lblPlaceholder.TabIndex = 5;
            // 
            // Label
            // 
            this.Label.AutoSize = true;
            this.Label.Location = new System.Drawing.Point(20, 61);
            this.Label.Name = "Label";
            this.Label.Size = new System.Drawing.Size(296, 13);
            this.Label.TabIndex = 7;
            this.Label.Text = "Enter the values separated by comma in the input field below:";
            this.Label.Click += new System.EventHandler(this.label1_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(240)))), ((int)(((byte)(248)))), ((int)(((byte)(255)))));
            this.ClientSize = new System.Drawing.Size(480, 447);
            this.Controls.Add(this.Label);
            this.Controls.Add(this.lblHeading);
            this.Controls.Add(this.lblPlaceholder);
            this.Controls.Add(this.panelChart);
            this.Controls.Add(this.btnDrawChart);
            this.Controls.Add(this.txtDataInput);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Form1";
            this.Text = "Pie Chart Application";
            this.panelChart.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }


        // Helper method for rounded rectangles
        private GraphicsPath RoundedRectangle(Rectangle bounds, int cornerRadius)
        {
            GraphicsPath path = new GraphicsPath();
            int diameter = cornerRadius * 2;
            path.AddArc(bounds.X, bounds.Y, diameter, diameter, 180, 90);
            path.AddArc(bounds.Right - diameter, bounds.Y, diameter, diameter, 270, 90);
            path.AddArc(bounds.Right - diameter, bounds.Bottom - diameter, diameter, diameter, 0, 90);
            path.AddArc(bounds.X, bounds.Bottom - diameter, diameter, diameter, 90, 90);
            path.CloseFigure();
            return path;
        }

        private Label lblPlaceholder;
        private Label Label;
    }
}
